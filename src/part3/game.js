    const characterSelection = document.querySelector('.selection-personnages');
    const gameInterface = document.querySelector('.game-interface');
    const playerCard = document.querySelector('.player-card .character-info');
    const targetCard = document.querySelector('.target-card .character-info');
    const combatLog = document.querySelector('.journal-combat textarea');

    class Logger {
        static log(message) {
            combatLog.value += message + '\n';
            combatLog.scrollTop = combatLog.scrollHeight;
        }
    }

    class Personnage {
        constructor(nom, pv, attaque) {
            this.nom = nom;
            this.pv = pv;
            this.attaque = attaque;
        }

        get pv() {
            return this._pv;
        }

        set pv(value) {
            if (value < 0) this._pv = 0;
            else this._pv = value;
        }

        attaquer(cible) {
            if (cible.pv > 0) {
                cible.pv -= this.attaque;
                Logger.log(`${this.nom} attaque ${cible.nom} et lui fait perdre ${this.attaque} points de vie.`);
                if (cible.pv <= 0) {
                    Logger.log(`${cible.nom} a été vaincu!`);
                } else {
                    Logger.log(`${cible.nom} a encore ${cible.pv} points de vie.`);
                }
            } else {
                Logger.log(`${cible.nom} a déjà été vaincu.`);
            }
        }

        observer() {
            Logger.log(this.nom  + " observe attentivement.");
        }

        static estEnVie(personnage) {
            return personnage.pv > 0;
        }
    }

    class Uchiha extends Personnage {
        constructor(nom, pv, attaque) {
            super(nom, pv, attaque);
            this.sharingan = false;
        }

        activerSharingan() {
            this.sharingan = true;
            Logger.log(`${this.nom} a activé son Sharingan.`);
        }

        attaquer(cible) {
            if (this.sharingan) {
                cible.pv -= this.attaque * 2;
                Logger.log(`${this.nom} utilise son Sharingan pour infliger le double de dégâts!`);
            } else {
                super.attaquer(cible);
            }
        }
    }

// Sous-classe pour les Jinchuriki (hôtes de Bijuu)
    class Jinchuriki extends Personnage {
        constructor(nom, pv, attaque, bijuu) {
            super(nom, pv, attaque);
            this.bijuu = bijuu;
        }

        libererBijuu(cible) {
            cible.pv -= this.attaque * 3;
            Logger.log(`${this.nom} libère ${this.bijuu} pour infliger le triple de dégâts!`);
        }
    }

// Classe pour chaque personnage spécifique
    class Naruto extends Jinchuriki {
        constructor() {
            super('Naruto', 100, 25, 'Kurama');
        }

        rasengan(cible) {
            cible.pv -= 40;
            Logger.log(`${this.nom} utilise Rasengan sur ${cible.nom} et lui fait perdre 40 points de vie.`);
        }
    }

    class Sasuke extends Uchiha {
        constructor() {
            super('Sasuke', 120, 35);
        }

        chidori(cible) {
            cible.pv -= 40;
            Logger.log(`${this.nom} utilise Chidori sur ${cible.nom} et lui fait perdre 40 points de vie.`);
        }
    }

    class Sakura extends Personnage {
        constructor() {
            super('Sakura', 80, 15);
        }

        punch(cible) {
            cible.pv -= 30;
            Logger.log(`${this.nom} donne un coup de poing à ${cible.nom} et lui fait perdre 30 points de vie.`);
        }
    }

    class Kakashi extends Personnage {
        constructor() {
            super('Kakashi', 160, 40);
        }

        raikiri(cible) {
            cible.pv -= 40;
            Logger.log(`${this.nom} utilise Raikiri sur ${cible.nom} et lui fait perdre 40 points de vie.`);
        }
    }

    class Itachi extends Uchiha {
        constructor() {
            super('Itachi', 200, 55);
        }

        tsukuyomi(cible) {
            cible.pv -= 80;
            Logger.log(`${this.nom} utilise Tsukuyomi sur ${cible.nom} et lui fait perdre 80 points de vie.`);
        }
    }

    class Kisame extends Personnage {
        constructor() {
            super('Kisame', 120, 28);
        }

        samehada(cible) {
            cible.pv -= 40;
            Logger.log(`${this.nom} utilise Samehada sur ${cible.nom} et lui fait perdre 40 points de vie.`);
        }
    }



    class Game {
        constructor() {
            this.personnages = {
                'Naruto': new Naruto(),
                'Sasuke': new Sasuke(),
                'Sakura': new Sakura(),
                'Kakashi': new Kakashi(),
                'Itachi': new Itachi(),
                'Kisame': new Kisame()
            };
            this.currentPlayer = null;
            this.currentTarget = null;
            this.specialActions = new Map([
                [Naruto, (target) => this.currentPlayer.rasengan(target)],
                [Sasuke, (target) => this.currentPlayer.chidori(target)],
                [Sakura, (target) => this.currentPlayer.punch(target)],
                [Kakashi, (target) => this.currentPlayer.raikiri(target)],
                [Itachi, (target) => this.currentPlayer.tsukuyomi(target)],
                [Kisame, (target) => this.currentPlayer.samehada(target)]
            ]);
            this.initEventListeners();
        }

        initEventListeners() {
            const startButton = document.querySelector('.start-game');
            const characterCards = document.querySelectorAll('.perso-card');
            const actionButtons = document.querySelectorAll('.player-card .actions button');


            startButton.addEventListener('click', function() {
                startButton.classList.add('hidden');
                characterSelection.classList.remove('hidden');
            });

            characterCards.forEach(card => {
                card.addEventListener('click', () => {
                    this.selectCharacter(card);
                });
            });

            actionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    this.performAction(button.dataset.action);
                });
            });
        }

        selectCharacter(card) {
            this.currentPlayer = this.personnages[card.dataset.nom];
            card.classList.add('selected');

            let cibles = Object.keys(this.personnages);
            cibles.splice(cibles.indexOf(this.currentPlayer.nom), 1);
            this.currentTarget = this.personnages[cibles[Math.floor(Math.random() * cibles.length)]];

            characterSelection.classList.add('hidden');
            gameInterface.classList.remove('hidden');
            this.updateCharacterCards();
        }

        performAction(action) {
            if (action === 'attaque') {
                this.currentPlayer.attaquer(this.currentTarget);
            } else if (action === 'defense') {
                this.currentPlayer.observer();
            } else if (action === 'special') {
                this.performSpecialAction();
            }

            this.verifyGameOver();
            this.enemyRandomAction();
            this.verifyGameOver();
            this.updateCharacterCards();
        }

        performSpecialAction() {
            const action = this.specialActions.get(this.currentPlayer.constructor) ?? this.defaultSpecialAction;
            action(this.currentTarget);
        }

        enemyRandomAction() {
            const actions = ['attaque', 'defense', 'special'];
            const randomAction = actions[Math.floor(Math.random() * actions.length)];

            if (randomAction === 'attaque') {
                this.currentTarget.attaquer(this.currentPlayer);
            } else if (randomAction === 'defense') {
                this.currentTarget.observer();
            } else if (randomAction === 'special') {
                const action = this.specialActions.get(this.currentPlayer.constructor) ?? this.defaultSpecialAction;
                action(this.currentTarget);
            }
        }

        verifyGameOver() {
            if (this.currentPlayer.pv <= 0 || this.currentTarget.pv <= 0) {
                const winner = this.currentPlayer.pv > 0 ? this.currentPlayer.nom : this.currentTarget.nom;
                alert('Le combat est terminé!' + winner + ' a gagné la bataille!')
                this.resetGame();
            } else {
                Logger.log('Le combat continue...');
            }
        }

        updateCharacterCards() {
            // Mettre à jour les informations des cartes du joueur et de la cible avec les détails des personnages sélectionnés
            playerCard.innerHTML = `<h3>${this.currentPlayer.nom}</h3><p>PV: ${this.currentPlayer.pv}</p>`;
            targetCard.innerHTML = `<h3>${this.currentTarget.nom}</h3><p>PV: ${this.currentTarget.pv}</p>`;
        }

        resetGame() {
            combatLog.value = '';
            this.currentPlayer = null;
            this.currentTarget = null;
            characterSelection.classList.remove('hidden');
            gameInterface.classList.add('hidden');
            const characterCards = document.querySelectorAll('.perso-card');
            characterCards.forEach(card => {
                card.classList.remove('selected');
            });
        }
    }

    // Initialisation du jeu
    new Game();
