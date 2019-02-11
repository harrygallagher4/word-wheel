# word-wheel
Word Wheel puzzle state calculator and dictionary scanner

## Usage
This module installs the `ww` command which either accepts a four letter word 
and computes the word wheel state for that word, or accepts the `-s, --scan` 
argument and prints a list of all words included in `words.json` and how many 
other words appear on the word wheel at the same time.

To compute the state for the word 'pear'

![ww pear][]

To scan the dictionary (words.json)

```
~$ ww -s | sort -r | head -n20

4: zobu
4: tete
4: shun
4: perk
4: papa
4: oppo
4: octa
4: noon
4: mary
4: lang
4: juju
4: guls
4: drip
4: dodo
4: deed
4: abba
3: zols
3: zobo
3: zits
3: zila
```

[ww pear]: https://i.imgur.com/Z0nA5bt.png
