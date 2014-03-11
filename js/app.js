var sol = {
  suits: [
    { name: 'spades', icon: '♠', color: 'black' },
    { name: 'clubs', icon: '♣', color: 'black' },
    { name: 'hearts', icon: '♥', color: 'red' },
    { name: 'diamonds', icon: '♦', color: 'red' }
  ],

  ranks: [
    { name: 'ace', symbol: 'A' },
    { name: 'deuce', symbol: '2' },
    { name: 'trey', symbol: '3' },
    { name: 'four', symbol: '4' },
    { name: 'five', symbol: '5' },
    { name: 'six', symbol: '6' },
    { name: 'seven', symbol: '7' },
    { name: 'eight', symbol: '8' },
    { name: 'nine', symbol: '9' },
    { name: 'ten', symbol: '10' },
    { name: 'jack', symbol: 'J' },
    { name: 'queen', symbol: 'Q' },
    { name: 'king', symbol: 'K' }
  ],

  buildDeck: function() {
    var that = this;
    return [].concat.apply([], this.suits.map(function(suit) {
      return that.ranks.map(function(rank, i) {
        return { rank: rank.name, value: i + 1, suit: suit.name,
          icon: suit.icon, symbol: rank.symbol, color: suit.color };
      });
    }));
  },

  shuffle: function(deck) {
    var shuffled = new Array(52);
    deck.map(function(card) {
      var n = Math.floor(Math.random() * 52);
      while (shuffled[n] !== undefined) {
        n = Math.floor(Math.random() * 52);
      }

      shuffled[n] = card;
    });

    return shuffled;
  }
};
