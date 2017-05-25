# Description

The goal of this project was to create a plugin that could be used to display notifications for various environments. It was made using jQuery, and it includes basic functions to create a blank &lt;div&gt; to overlay the page, style the notifications and then implement the messages themselves, and finally animate and display the whole component.

# Usage

## Prerequisites

Make sure you have [jQuery](https://code.jquery.com/) linked in your project, otherwise this plugin will not work.

---

To use this plugin in your project, add the `plugin.js` file to the folder you're using to store JavaScript files.
Then, at the bottom of the HTML document you where you wish to utilize the plugin, link it in the script **beneath** where you have linked jQuery, and **above** where you plan to use it in your other linked JavaScript files.

# How it Works

The plugin works by creating a blank `<div>` to overlay the page, which is then used as a canvas to display the notifications on top of.

Attach a notification to a link by invoking the corresponding function on the target `<a>` tag.

We'll be using the following as an example:

```
<html>
...
<h1>Hello World</h1>

<a href="#" id="my-link">Notify me!</a>

// link jQuery
<script type="text/javascript" src="path/to/plugin.js"></script>
<script type="text/javascript" src="path/to/main.js"></script>
```

## Alert

![Image of Alert Notification](http://i.imgur.com/E0emSY2.png)

To receive your standard alert notification, simply target the ID of your link, and call the alert function from inside our `main.js` file
```
...
$('#my-link').alertMsg();
...
```

## Warning

![Image of Warning Notification](http://i.imgur.com/i1wSQhr.png)

To trigger a warning, simply target the ID of your link, and call the warning function from inside our `main.js` file
```
...
$('#my-link').warningMsg();
...
```

## Error

![Image of Error Notification](http://i.imgur.com/E9lYFQl.png?1)
To notify the user of an error, attach the error function to the target link from inside our `main.js` file
```
...
$('#my-link').errorMsg();
...
```

## Success

![Image of Success Notification](http://i.imgur.com/fLB4wmt.png)

To notify the user that a task was successful, call the success function on your target element from inside the `main.js` file
```
...
$('#my-link').successMsg();
...
```

### Customizing the Plugin

To better suit the plugin to your needs, you may want to edit the message content being sent by the notification, you can do so by editing the respective `message.html` section of any notification of your choosing.
```
//* === ALERT NOTIFICATION === */
$.fn.alertMsg = function() {
  ...  
  // set the alert text
  message.html('**<EDIT THE MESSAGE HERE>**')
  ...
}
```

To change the background color of your notification, simply edit the values of the colors being passed to the `notificationStyle()` function
```
//* === ALERT NOTIFICATION === */
$.fn.alertMsg = function() {
  ...
  $.fn.notificationStyle("**<value>**", "**<value>**");
  ...
}
```

To change the color of your message, edit the value of the color being passed to the `msgStyle()` function
```
//* === ALERT NOTIFICATION === */
$.fn.alertMsg = function() {
  ...
  $.fn.msgStyle("**<value>**");
  ...
}
```
