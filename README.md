# How to use this style guide generator

The following article describes the need for a robust and consistent style guide
[Living Style Guide](https://www.smashingmagazine.com/2016/05/creating-a-living-style-guide-case-study/)
Steven Lambert's Living Style Guide Generator is simple enough to use yet robust, customizable, and best of all open source.
[LivingCSS GitHub](https://github.com/straker/livingcss)
Follow his README for usage and implementation
Comments are parsed by the generator using Markdown, for reference
[GitHub's Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
[John Gruber's Markdown Basics](http://daringfireball.net/projects/markdown/basics)
[And if that's still not enough](http://commonmark.org/help/tutorial/)

#### This boilerplate was built with considerations from the Family Search Living Style Guide and CSS-Tricks 'Gulp for Beginners' article

[Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)
[Family Search's Living Style Guide](https://github.com/fs-webdev/fs-styles)

#### Good Reads on modular and atomic design
[Why do modular design](https://www.smashingmagazine.com/2016/06/designing-modular-ui-systems-via-style-guide-driven-development/)
[Concepts of Atomic Design by Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/)

#### The Sass sections are broke out in atomic design Concepts
When you want to add a new sass file, add it to the subfolder appropriate to what kind of element it is. An atom, a molecule, an organism, a page, or a template. You can read the information above to learn what those concepts are. Then use an @import to import your sass file into the self-titled sass main file. Such as atom-style.scss, molecule.scss, organisms-style.scss, etc.
All of these files get imported then into the style.scss file. Gulp then uses that one file to make one .css file that can be used in Fetch.
