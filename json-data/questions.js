module.exports = {
  html: [
    {
      question: 'What does HTML stand for?',
      answers: [
        'Hyperlinks and Text Markup Language',
        'Hyper Text Markup Language',
        'Home Tool Markup Language'
      ],
      correct: 0
    },
    {
      question: 'How can you open a link in a new tab/browser window?',
      answers: [
        ' <a href="url" target="new">',
        '<a href="url" new>',
        '<a href="url" target="_blank">'
      ],
      correct: 2
    },
    {
      question: 'Inline elements are normally displayed without starting a new line',
      answers: [
        'true',
        'false',
      ],
      correct: 0
    }
  ],
  css: [
    {
      question: 'What does CSS stand for?',
      answers: [
        'Colorful Style Sheets',
        'Cascading Style Sheets',
        'Computer Style Sheets',
        'Creative Style Sheets'
      ],
      correct: 1
    },
    {
      question: 'What is the correct HTML for referring to an external style sheet?',
      answers: [
        '<link rel="stylesheet" type="text/css" href="mystyle.css">',
        '<style src="mystyle.css">',
        '<stylesheet>mystyle.css</stylesheet>',
      ],
      correct: 0
    },
    {
      question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
      answers: [
        'In the <head> section',
        'At the end of the document',
        'In the <body> section',
      ],
      correct: 0
    }
  ],
  js: [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      answers: [
        '<js>',
        '<javascript>',
        '<scripting>',
        '<script>'
      ],
      correct: 3
    },
    {
      question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      answers: [
        '<script src="xxx.js">',
        '<script href="xxx.js">',
        '<script name="xxx.js">',
      ],
      correct: 0
    },
    {
      question: 'How does a FOR loop start?',
      answers: [
        'for i = 1 to 5',
        'for (i = 0; i <= 5; i++)',
        'for (i <= 5; i++)',
        'for (i = 0; i <= 5)',
      ],
      correct: 1
    }
  ],
  php:[
    {
      question: 'What does PHP stand for?',
      answers: [
        'Personal Hypertext Processor',
        'PHP: Hypertext Preprocessor',
        'Private Home Page',
      ],
      correct: 2
    },
    {
      question: 'PHP server scripts are surrounded by delimiters, which?',
      answers: [
        '<?php>...</?>',
        '<script>...</script>',
        '<&>...</&>',
        '<?php...?>',
      ],
      correct: 3
    },
    {
      question: 'How do you write "Hello World" in PHP',
      answers: [
        '"Hello World";',
        'Document.Write("Hello World");',
        'echo "Hello World";',
      ],
      correct: 2
    }
  ],
  jquery:[
    {
      question: 'Which of the following is correct?',
      answers: [
        'jQuery is a JSON Library',
        'jQuery is a JavaScript Library',
      ],
      correct: 1
    },
    {
      question: 'Which sign does jQuery use as a shortcut for jQuery?',
      answers: [
        'the % sign',
        'the $ sign',
        'the ? Sign',
      ],
      correct: 1
    },
    {
      question: 'Look at the following selector: $("div"). What does it select?',
      answers: [
        'All div elements',
        'The first div element',
      ],
      correct: 0
    }
  ]
};