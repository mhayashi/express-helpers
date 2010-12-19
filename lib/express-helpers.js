var express = require('express');

exports.date_tag = function(name, value , html_options) {
  if (! (value instanceof Date))
    value = new Date();

  var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var years = [], months = [], days =[];
  var year = value.getFullYear();
  var month = value.getMonth();
  var day = value.getDate();
  for (var y = year - 15; y < year+15 ; y++) {
    years.push({value: y, text: y});
  }
  for (var m = 0; m < 12; m++) {
    months.push({value: (m), text: month_names[m]});
  }
  for (var d = 0; d < 31; d++) {
    days.push({value: (d+1), text: (d+1)});
  }
  var year_select = select_tag(name+'[year]', year, years, {id: name+'[year]'} );
  var month_select = select_tag(name+'[month]', month, months, {id: name+'[month]'});
  var day_select = select_tag(name+'[day]', day, days, {id: name+'[day]'});

  return year_select+month_select+day_select;
};

exports.form_tag = function(action, html_options) {
  html_options = html_options || {};
  html_options.action = action;
  if (html_options.multipart == true) {
    html_options.method = 'post';
    html_options.enctype = 'multipart/form-data';
  }

  return start_tag_for('form', html_options);
};

exports.form_tag_end = function() { return tag_end('form'); };

exports.hidden_field_tag   = function(name, value, html_options) {
  return input_field_tag(name, value, 'hidden', html_options);
};

var input_field_tag = exports.input_field_tag = function(name, value , inputType, html_options) {

  html_options = html_options || {};
  html_options.id  = html_options.id  || name;
  html_options.value = value || '';
  html_options.type = inputType || 'text';
  html_options.name = name;

  return single_tag_for('input', html_options);
};

// exports.is_current_page = function(url) {
//   return (window.location.href == url || window.location.pathname == url ? true : false);
// };

var link_to = exports.link_to = function(name, url, html_options) {
  if (!name) var name = 'null';
  if (!html_options) var html_options = {};

  if (html_options.confirm) {
    html_options.onclick =
      " var ret_confirm = confirm(\""+html_options.confirm+"\"); if(!ret_confirm){ return false;} ";
    html_options.confirm = null;
  }
  html_options.href=url;
  return start_tag_for('a', html_options)+name+ tag_end('a');
};

exports.submit_link_to = function(name, url, html_options){
  if (!name) var name = 'null';
  if (!html_options) var html_options = {};
  html_options.onclick = html_options.onclick  || '' ;

  if (html_options.confirm) {
    html_options.onclick =
      " var ret_confirm = confirm(\""+html_options.confirm+"\"); if(!ret_confirm){ return false;} ";
    html_options.confirm = null;
  }

  html_options.value = name;
  html_options.type = 'submit';
  html_options.onclick=html_options.onclick+
    (url ? url_for(url) : '')+'return false;';
  //html_options.href='#'+(options ? Routes.url_for(options) : '')
  return start_tag_for('input', html_options);
};

exports.link_to_if = function(condition, name, url, html_options, post, block) {
  return link_to_unless((condition == false), name, url, html_options, post, block);
};

var link_to_unless = exports.link_to_unless = function(condition, name, url, html_options, block) {
  html_options = html_options || {};
  if (condition) {
    if (block && typeof block == 'function') {
      return block(name, url, html_options, block);
    } else {
      return name;
    }
  } else
    return link_to(name, url, html_options);
};

// exports.link_to_unless_current = function(name, url, html_options, block) {
//   html_options = html_options || {};
//   return this.link_to_unless(this.is_current_page(url), name, url, html_options, block);
// };

exports.password_field_tag = function(name, value, html_options) { return input_field_tag(name, value, 'password', html_options); };

var select_tag = exports.select_tag = function(name, value, choices, html_options) {
  html_options = html_options || {};
  html_options.id  = html_options.id  || name;
  html_options.value = value;
  html_options.name = name;

  var txt = '';
  txt += start_tag_for('select', html_options);

  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    var optionOptions = {value: choice.value};
    if (choice.value == value)
      optionOptions.selected ='selected';
    txt += start_tag_for('option', optionOptions )+choice.text+tag_end('option');
  }
  txt += tag_end('select');
  return txt;
};

var single_tag_for = exports.single_tag_for = function(_tag, html_options) { return tag(_tag, html_options, '/>');};

var start_tag_for = exports.start_tag_for = function(_tag, html_options)  { return tag(_tag, html_options); };

exports.submit_tag = function(name, html_options) {
  html_options = html_options || {};
  //html_options.name  = html_options.id  || 'commit';
  html_options.type = html_options.type  || 'submit';
  html_options.value = name || 'Submit';
  return single_tag_for('input', html_options);
};

var tag = exports.tag = function(_tag, html_options, end) {
  if (!end) var end = '>';
  var txt = ' ';
  for (var attr in html_options) {
    if (html_options[attr] != null)
      var value = html_options[attr].toString();
        else
          var value='';
    if (attr == "Class") // special case because "class" is a reserved word in IE
      attr = "class";
    if (value.indexOf("'") != -1)
      txt += attr+'=\"'+value+'\" ';
    else
      txt += attr+"='"+value+"' ";
  }
  return '<'+_tag+txt+end;
};

var tag_end = exports.tag_end = function(_tag) { return '</'+_tag+'>'; };

exports.text_tag = exports.text_area_tag = function(name, value, html_options) {
  html_options = html_options || {};
  html_options.id  = html_options.id  || name;
  html_options.name  = html_options.name  || name;
  value = value || '';
  if (html_options.size) {
    html_options.cols = html_options.size.split('x')[0];
    html_options.rows = html_options.size.split('x')[1];
    delete html_options.size;
  }

  html_options.cols = html_options.cols || 50;
  html_options.rows = html_options.rows || 4;

  return  start_tag_for('textarea', html_options)+value+tag_end('textarea');
};

exports.text_field_tag = function(name, value, html_options) { return input_field_tag(name, value, 'text', html_options); };

var url_for = exports.url_for = function(url) {
  return 'window.location="'+url+'";';
};

exports.img_tag = function(image_location, alt, options){
  options = options || {};
  options.src = image_location;
  options.alt = alt;
  return single_tag_for('img', options);
};

exports.all = function(app) {
  if (app instanceof express.Server) {
    for (name in exports) {
      if (name !== 'all' && typeof exports[name] === 'function') {
        var obj = {};
        obj[name] = exports[name];
        app.helpers(obj);
      }
    }
  }
  return app;
};
