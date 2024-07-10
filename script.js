const btn = document.querySelector('#newquote');

const quotes = [{
    quote: '“There is more to life than increasing its speed.”',
    person: 'Mahatma Gandhi'
},
{
    quote: '“You only have to do a very few things right in your life—so long as you don’t do too many things wrong.”',
    person: 'Warren Buffet'
},
{
    quote: '“Thinking is the hardest work there is, which is the probable reason why so few engage in it.”',
    person: 'Henry Ford'
},
{
    quote: '“Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.”',
    person: 'Mark Twain'
},
{
    quote: '“I am only an average man, but, by George, I work harder at it than the average man.” ',
    person: 'Theodore Roosevelt'
},
{
    quote: ' “If you have a job without any aggravations, you don’t have a job.” ',
    person: 'Malcolm Forbes'
},
{
    quote: '“Imagination is more important than knowledge.”',
    person: 'Albert Einstein'
},
{
    quote: '“The time is always right to do what is right.”',
    person: 'Martin Luther King. Jr'
},
{
    quote: '"All that glitters is not gold."',
    person: 'William Shakespeare'
},
{
    quote: '"Genius is one percent inspiration and ninety-nine percent perspiration."',
    person: 'Thomas Edison'
},
{
    quote: '"If you are going through hell, keep going."',
    person: 'Winston Churchill'
},
{
    quote: '"If you want something said, ask a man; if you want something done, ask a woman."',
    person: 'Margaret Thatcher'
},
{
    quote: '"That’s one small step for a man, a giant leap for mankind."',
    person: 'Neil Armstrong'
},
];
btn.addEventListener('click', function(){
    const quote1 = document.querySelector('.quote');
    const person1 = document.querySelector('.person');
    let random = Math.floor(Math.random()*quotes.length);
    quote1.innerHTML = quotes[random].quote;
    person1.innerHTML = quotes[random].person;

})
