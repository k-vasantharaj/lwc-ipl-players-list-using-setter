import { LightningElement, api } from 'lwc';

export default class PlayersListUsingSetter extends LightningElement {
    cskPlayers = [];
    miPlayers = [];

    @api
    get players() {
        return [...this.miPlayers, ...this.cskPlayers];
    }

    set players(value) {
        if (value && Array.isArray(value)) {
            const allPlayers = value.map(player => {
                return {
                    ...player,
                    name: player.name.toUpperCase()
                };
            });

            this.cskPlayers = allPlayers.filter(player => player.team === 'CSK');
            this.miPlayers = allPlayers.filter(player => player.team === 'MI');
        }
    }
}
