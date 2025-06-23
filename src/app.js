 function generateExcuse() {
  const who = ['My dog', 'The neighbor', 'A bird', 'My grandma', 'The mailman'];
  const action = ['ate', 'broke', 'hid', 'destroyed', 'took'];
  const what = ['my homework', 'my phone', 'the car keys', 'my laptop', 'the project'];
  const when = ['this morning', 'last night', 'just now', 'while I was sleeping', 'before class'];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return `${random(who)} ${random(action)} ${random(what)} ${random(when)}.`;
}

window.onload = () => {
  document.getElementById('excuse').innerHTML = generateExcuse();
};
