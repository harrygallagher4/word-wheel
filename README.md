# word-wheel
Word Wheel puzzle state calculator and dictionary scanner

![word wheel][]

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

## What the hell is this?
I got this "word wheel" game for christmas this year and found it pretty interesting. The word wheel is four wooden wheels that each have the alphabet on them, and the goal is to rotate them to create multiple words at the same time. It's actually *really* hard. Anyway, I thought it would be interesting to write a little program to compute the state of the wheel given a word and then run a dictionary through that and see how many words it's possible to make at the same time. Apparently four is the maximum, but that also depends on the dictionary you use. 

Also, I found it interesting that one of the four-word states (drip, guls, mary, octa) contains the words octa and guls (the plural of gul) which is defined as:
```
Gul n. 1. a large octagonal design derived from the shape of a rose, a motif on Oriental rugs.
```

[ww pear]: https://i.imgur.com/Z0nA5bt.png
[word wheel]: https://i.imgur.com/PI22nHy.png
