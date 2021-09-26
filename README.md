# jekyll-post
Simple CLI for generating a new Jekyll blogpost timestamped at the current date.

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

### Assumptions

Expects to be run in a directory containing a `./_posts` folder.


### CLI Options

`-t --title <post title>` Title of the post. Should be wrapped in quotes. (Required)

`-c --categories <category1,category2,category3...>` Comma-separated list of categories. Category names cannot contain spaces.

