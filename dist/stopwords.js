'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getStopwords = void 0;
const getStopwords = () => [
  'i',
  'me',
  'my',
  'myself',
  'we',
  'our',
  'ours',
  'ourselves',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
  'he',
  'him',
  'his',
  'himself',
  'she',
  'her',
  'hers',
  'herself',
  'it',
  'its',
  'itself',
  'they',
  'them',
  'their',
  'theirs',
  'themselves',
  'what',
  'which',
  'who',
  'whom',
  'this',
  'that',
  'these',
  'those',
  'am',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'have',
  'has',
  'had',
  'having',
  'do',
  'does',
  'did',
  'doing',
  'a',
  'an',
  'the',
  'and',
  'but',
  'if',
  'or',
  'because',
  'as',
  'until',
  'while',
  'of',
  'at',
  'by',
  'for',
  'with',
  'about',
  'against',
  'between',
  'into',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'to',
  'from',
  'up',
  'down',
  'in',
  'out',
  'on',
  'off',
  'over',
  'under',
  'again',
  'further',
  'then',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'any',
  'both',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'such',
  'no',
  'nor',
  'not',
  'only',
  'own',
  'same',
  'so',
  'than',
  'too',
  'very',
  's',
  't',
  'can',
  'will',
  'just',
  'don',
  'should',
  'now',
  'd',
  'll',
  'm',
  'o',
  're',
  've',
  'y',
  'ain',
  'aren',
  'couldn',
  'didn',
  'doesn',
  'hadn',
  'hasn',
  'haven',
  'isn',
  'ma',
  'mightn',
  'mustn',
  'needn',
  'shan',
  'shouldn',
  'wasn',
  'weren',
  'won',
  'wouldn',
];
exports.getStopwords = getStopwords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcHdvcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0b3B3b3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDTyxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxHQUFHO0lBQ0gsSUFBSTtJQUNKLElBQUk7SUFDSixRQUFRO0lBQ1IsSUFBSTtJQUNKLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0lBQ1osSUFBSTtJQUNKLEtBQUs7SUFDTCxLQUFLO0lBQ0wsU0FBUztJQUNULEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtJQUNOLFNBQVM7SUFDVCxJQUFJO0lBQ0osS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxPQUFPO0lBQ1AsSUFBSTtJQUNKLElBQUk7SUFDSixLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU07SUFDTixJQUFJO0lBQ0osTUFBTTtJQUNOLE9BQU87SUFDUCxNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxRQUFRO0lBQ1IsSUFBSTtJQUNKLE1BQU07SUFDTixLQUFLO0lBQ0wsT0FBTztJQUNQLEdBQUc7SUFDSCxJQUFJO0lBQ0osS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsSUFBSTtJQUNKLElBQUk7SUFDSixTQUFTO0lBQ1QsSUFBSTtJQUNKLE9BQU87SUFDUCxPQUFPO0lBQ1AsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsSUFBSTtJQUNKLE1BQU07SUFDTixJQUFJO0lBQ0osTUFBTTtJQUNOLElBQUk7SUFDSixLQUFLO0lBQ0wsSUFBSTtJQUNKLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxTQUFTO0lBQ1QsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUNKLEtBQUs7SUFDTCxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sSUFBSTtJQUNKLE1BQU07SUFDTixLQUFLO0lBQ0wsTUFBTTtJQUNOLEdBQUc7SUFDSCxHQUFHO0lBQ0gsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLFFBQVE7SUFDUixLQUFLO0lBQ0wsR0FBRztJQUNILElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILEtBQUs7SUFDTCxNQUFNO0lBQ04sUUFBUTtJQUNSLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLElBQUk7SUFDSixRQUFRO0lBQ1IsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLFFBQVE7Q0FDVCxDQUFDO0FBMUpXLFFBQUEsWUFBWSxnQkEwSnZCIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgZ2V0U3RvcHdvcmRzID0gKCkgPT4gW1xuICBcImlcIixcbiAgXCJtZVwiLFxuICBcIm15XCIsXG4gIFwibXlzZWxmXCIsXG4gIFwid2VcIixcbiAgXCJvdXJcIixcbiAgXCJvdXJzXCIsXG4gIFwib3Vyc2VsdmVzXCIsXG4gIFwieW91XCIsXG4gIFwieW91clwiLFxuICBcInlvdXJzXCIsXG4gIFwieW91cnNlbGZcIixcbiAgXCJ5b3Vyc2VsdmVzXCIsXG4gIFwiaGVcIixcbiAgXCJoaW1cIixcbiAgXCJoaXNcIixcbiAgXCJoaW1zZWxmXCIsXG4gIFwic2hlXCIsXG4gIFwiaGVyXCIsXG4gIFwiaGVyc1wiLFxuICBcImhlcnNlbGZcIixcbiAgXCJpdFwiLFxuICBcIml0c1wiLFxuICBcIml0c2VsZlwiLFxuICBcInRoZXlcIixcbiAgXCJ0aGVtXCIsXG4gIFwidGhlaXJcIixcbiAgXCJ0aGVpcnNcIixcbiAgXCJ0aGVtc2VsdmVzXCIsXG4gIFwid2hhdFwiLFxuICBcIndoaWNoXCIsXG4gIFwid2hvXCIsXG4gIFwid2hvbVwiLFxuICBcInRoaXNcIixcbiAgXCJ0aGF0XCIsXG4gIFwidGhlc2VcIixcbiAgXCJ0aG9zZVwiLFxuICBcImFtXCIsXG4gIFwiaXNcIixcbiAgXCJhcmVcIixcbiAgXCJ3YXNcIixcbiAgXCJ3ZXJlXCIsXG4gIFwiYmVcIixcbiAgXCJiZWVuXCIsXG4gIFwiYmVpbmdcIixcbiAgXCJoYXZlXCIsXG4gIFwiaGFzXCIsXG4gIFwiaGFkXCIsXG4gIFwiaGF2aW5nXCIsXG4gIFwiZG9cIixcbiAgXCJkb2VzXCIsXG4gIFwiZGlkXCIsXG4gIFwiZG9pbmdcIixcbiAgXCJhXCIsXG4gIFwiYW5cIixcbiAgXCJ0aGVcIixcbiAgXCJhbmRcIixcbiAgXCJidXRcIixcbiAgXCJpZlwiLFxuICBcIm9yXCIsXG4gIFwiYmVjYXVzZVwiLFxuICBcImFzXCIsXG4gIFwidW50aWxcIixcbiAgXCJ3aGlsZVwiLFxuICBcIm9mXCIsXG4gIFwiYXRcIixcbiAgXCJieVwiLFxuICBcImZvclwiLFxuICBcIndpdGhcIixcbiAgXCJhYm91dFwiLFxuICBcImFnYWluc3RcIixcbiAgXCJiZXR3ZWVuXCIsXG4gIFwiaW50b1wiLFxuICBcInRocm91Z2hcIixcbiAgXCJkdXJpbmdcIixcbiAgXCJiZWZvcmVcIixcbiAgXCJhZnRlclwiLFxuICBcImFib3ZlXCIsXG4gIFwiYmVsb3dcIixcbiAgXCJ0b1wiLFxuICBcImZyb21cIixcbiAgXCJ1cFwiLFxuICBcImRvd25cIixcbiAgXCJpblwiLFxuICBcIm91dFwiLFxuICBcIm9uXCIsXG4gIFwib2ZmXCIsXG4gIFwib3ZlclwiLFxuICBcInVuZGVyXCIsXG4gIFwiYWdhaW5cIixcbiAgXCJmdXJ0aGVyXCIsXG4gIFwidGhlblwiLFxuICBcIm9uY2VcIixcbiAgXCJoZXJlXCIsXG4gIFwidGhlcmVcIixcbiAgXCJ3aGVuXCIsXG4gIFwid2hlcmVcIixcbiAgXCJ3aHlcIixcbiAgXCJob3dcIixcbiAgXCJhbGxcIixcbiAgXCJhbnlcIixcbiAgXCJib3RoXCIsXG4gIFwiZWFjaFwiLFxuICBcImZld1wiLFxuICBcIm1vcmVcIixcbiAgXCJtb3N0XCIsXG4gIFwib3RoZXJcIixcbiAgXCJzb21lXCIsXG4gIFwic3VjaFwiLFxuICBcIm5vXCIsXG4gIFwibm9yXCIsXG4gIFwibm90XCIsXG4gIFwib25seVwiLFxuICBcIm93blwiLFxuICBcInNhbWVcIixcbiAgXCJzb1wiLFxuICBcInRoYW5cIixcbiAgXCJ0b29cIixcbiAgXCJ2ZXJ5XCIsXG4gIFwic1wiLFxuICBcInRcIixcbiAgXCJjYW5cIixcbiAgXCJ3aWxsXCIsXG4gIFwianVzdFwiLFxuICBcImRvblwiLFxuICBcInNob3VsZFwiLFxuICBcIm5vd1wiLFxuICBcImRcIixcbiAgXCJsbFwiLFxuICBcIm1cIixcbiAgXCJvXCIsXG4gIFwicmVcIixcbiAgXCJ2ZVwiLFxuICBcInlcIixcbiAgXCJhaW5cIixcbiAgXCJhcmVuXCIsXG4gIFwiY291bGRuXCIsXG4gIFwiZGlkblwiLFxuICBcImRvZXNuXCIsXG4gIFwiaGFkblwiLFxuICBcImhhc25cIixcbiAgXCJoYXZlblwiLFxuICBcImlzblwiLFxuICBcIm1hXCIsXG4gIFwibWlnaHRuXCIsXG4gIFwibXVzdG5cIixcbiAgXCJuZWVkblwiLFxuICBcInNoYW5cIixcbiAgXCJzaG91bGRuXCIsXG4gIFwid2FzblwiLFxuICBcIndlcmVuXCIsXG4gIFwid29uXCIsXG4gIFwid291bGRuXCIsXG5dO1xuIl19