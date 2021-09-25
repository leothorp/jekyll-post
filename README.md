# jekyll-post
Simple CLI to generate a new post timestamped on the current date for a jekyll blog. 

### Requirements

Expects to be run in a directory containing a `./_posts` folder.

### Installation

```
  npm i -g @leothorp/jekyll-post
``` 
Now the cli will be globally available as `jp`. Usage:
```
jp -t "Post title" -c category1,category2
```


  Alternatively, to start using it directly without the global npm installation:
```
  npx @leothorp/jekyll-post -t "Post title" -c category1,category2
``` 


### CLI Options

`-t --title <post title>` Title of the post. Should be wrapped in quotes. (Required)

`-c --categories <category list>` Comma-separated list of categories (category names cannot contain space.)

