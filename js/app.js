((function() {

  var suits = [
    {
      name: 'spades',
      icon: '♠',
      color: 'black'
    },
    {
      name: 'clubs',
      icon: '♣',
      color: 'black'
    },
    {
      name: 'hearts',
      icon: '♥',
      color: 'red'
    },
    {
      name: 'diamonds',
      icon: '♦',
      color: 'red'
    }
  ];

  var ranks = [
    { name: 'ace',    symbol: 'A' },
    { name: 'deuce',  symbol: '2' },
    { name: 'trey',   symbol: '3' },
    { name: 'four',   symbol: '4' },
    { name: 'five',   symbol: '5' },
    { name: 'six',    symbol: '6' },
    { name: 'seven',  symbol: '7' },
    { name: 'eight',  symbol: '8' },
    { name: 'nine',   symbol: '9' },
    { name: 'ten',    symbol: '10' },
    { name: 'jack',   symbol: 'J' },
    { name: 'queen',  symbol: 'Q' },
    { name: 'king',   symbol: 'K' }
  ];

  var buildDeck = function() {
    return [].concat.apply([], suits.map(function(suit) {
      return ranks.map(function(rank, i) {
        return { rank: rank.name, value: i + 1, suit: suit.name,
          icon: suit.icon, symbol: rank.symbol, color: suit.color };
      });
    }));
  };

  var shuffle = function(deck) {
    var shuffled = new Array(52);
    
    deck.map(function(card) {
      var n = Math.floor(Math.random() * 52);
      
      while (shuffled[n] !== undefined) {
        n = Math.floor(Math.random() * 52);
      }

      shuffled[n] = card;
    });

    return shuffled;
  };

  var rules = {
    drawSize: 3
  };

  var table = {
    foundation: {
      spades: [],
      clubs: [],
      hearts: [],
      diamonds: []
    },

    tableau: {
      column1: new Array(1),
      column2: new Array(2),
      column3: new Array(3),
      column4: new Array(4),
      column5: new Array(5),
      column6: new Array(6),
      column7: new Array(7)
    },

    pile: {
      stock: [],
      waste: []
    }
  };

  var find = function(card) {
    var value;
    
    // console.log('find('+card+')')
    // for (var column in table.tableau) {
    //   column.map(compare(column));
    // }
    // for (var pile in table.foundation) {
    //   pile.map(compare(column));
    // }
    return value;
  };

  var deal = function() {
    var deck = shuffle(buildDeck());

    for (var i = 0;i < 7;i++) {
      for (var j = i + 1;j <= 7;j++) {
        table.tableau['column' + j][i] = deck.pop();
      }
    }

    table.stock = deck;
  };

  window.sol = {
    start: function() {
      deal();
    },

    checkTable: function() {
      return table;
    },

    drawFromStock: function() {
      if (table.stock.length === 0) return;

      var n = rules.drawSize;
      if (table.stock.length < n) n = table.stock.length;

      for (var i = 0;i < n;i++) {
        table.waste.push(table.stock.pop());
      }
    },

    cursor: {
      card: null,
      select: function(card) {
        if (card) return card;
        
        return find(card);
      }
    }
  };

})());
