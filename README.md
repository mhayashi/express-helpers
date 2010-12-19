# Express Helpers

Express Helpers is a port of EJS's ViewHelpers

## Features

Express Helpers provides view helpers for common tasks. These helpers are very similar to those found in the Ruby on Rails framework.

* date_tag
* form_tag
* form_tag_end
* hidden_field_tag
* input_field_tag
* link_to
* submit_link_to
* link_to_if
* link_to_unless
* password_field_tag
* select_tag
* single_tag_for
* start_tag_for
* submit_tag
* tag
* tag_end
* text_area_tag
* text_tag
* text_field_tag
* url_for
* img_tag

## Details


### date_tag(name, value, html_options)
Creates a date tag

    date_tag('Installation[date]', new Date(1982, 10,20) )


### form_tag(action, html_options)  
Creates a start form tag.

    form_tag('/myaction',{multipart: true}) 


### end_form_tag() 
Creates a start form tag.

    form_tag_end()


### hidden_field_tag( name,  value,  html_options)
Creates a hidden field.

	hidden_field_tag('something[interesting]', 5) => 

    "<input id=\'something[interesting]\' 
            value=\'5\' 
            type=\'hidden\' 
            name=\'something[interesting]\'/>"


### img_tag
Creates an image tag.

    img_tag('/some.png', 'something') => "<img src='/some.png' alt='something' />"


### input_field_tag
Creates an input field tag.

    input_field_tag('something[interesting]', 5) => 

    "<input id='something[interesting]' 
            value='5' 
            type='text' 
            name='something[interesting]'/>"



### link_to
Creates a link to another page.

    link_to('hello world', '/something/here') => "<a href='/something/here' >hello world</a>"



### submit_link_to
Creates a submit button that links to another page.

    submit_link_to('holla', '/new/location') => 

    "<input onclick='window.location=\"/new/location\";return false;' 
            value='holla' 
            type='submit' />"



### link_to_if(condition, name, url, html_options, post, block)
Just like link_to if the condition is true. If condition is false it returns name.

### link_to_unless(condition, name, url, html_options, block)
Just like link_to if the condition is false. If condition is true it returns name.

### password_field_tag
Returns a password field.

    password_field_tag('something[interesting]', 5) => 

    "<input id='something[interesting]' 
            value='5' 
            type='password' 
            name='something[interesting]'/>"



### select_tag
Returns a select tag.

    var choices = [ {value: 1,    text: 'First Choice' }, 
                    {value: 2,    text: 'Second Choice'},
                    {value: 3,    text: 'Third Choice'}  ]
    select_tag('mySelectElement', 2,  choices) => 
    
    "<select id='mySelectElement' value='2' name='mySelectElement'>
        <option value='1' >First Choice</option>
        <option value='2' selected='selected'>Second Choice</option>
        <option value='3'>Third Choice</option>
     </select>"



### single_tag_for

Helper for creating a single tag like <br/>

### start_tag_for

Helper for creating a beginning tag like <div>

### submit_tag
Creates a submit tag.

    submit_tag('Submit') => "<input type=\'submit\' value=\'Submit\' />"

### tag

Creates a general tag.

### tag_end

Creates an end tag like </div>

### text_area_tag

    text_area_tag('task[description]', 'Here is some text.\nA new line.') =>

    "<textarea id='task[description]' 
               name='task[description]' 
               cols='50' 
               rows='4' >Here is some text.\nA new line.</textarea>"



### text_field_tag

    text_field_tag('something[interesting]', 5) => 

    "<input id='something[interesting]' 
            value='5' 
            type='text' 
            name='something[interesting]'/>"



### url_for

returns a string that changes the url.


## License

(The MIT License)

EJS - Embedded JavaScript

Copyright (c) 2007 Edward Benson 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Ported by Masahiro Hayashi <hayashi.masahiro@gmail.com>

