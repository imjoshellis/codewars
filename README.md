# Algos by Josh Ellis

This repository is a work in progress. The goal is to consolidate my algorithm code and related resources into one place.

## Solved

As I solve problems from LeetCode and other sources, I'll add them in the [solved directory](https://github.com/imjoshellis/algos/tree/main/solved).

Each solution will have a suite of tests and a readme file explaining the thought process and code.

`12/1/2020 NOTE`: I just decided to restructure this repo and decided to add readmes to everything. Right now, there will be a lot of empty readmes in the solved folders.

## Scripts

I wrote custom scripts (`/lib/scripts`, compiled to `/bin`) to make starting and finishing new problems as easy and efficient as possible.

The start command copies the appropriate template files based on the language I give, renames them based on the name I give, and creates a directory called "working" with the new files in it.

The finish command renames and moves the working directory into solved, along with its contents.

If I get any interest (DM me on [Twitter](https://twitter.com/imjoshellis)), I can make a blank, language-agnostic quick-start repo along with instructions on how to use them.
