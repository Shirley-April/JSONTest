var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
);