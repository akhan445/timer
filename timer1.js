const args = process.argv.slice(2);

// Filter the arguments for positive integers only
const intervals = args.filter((elem) => {
  if (isNaN(elem)) {
    return false;
  } else if (Number(elem) < 0) {
    return false;
  }
  return true;
});

// if there are no arugments passed or if no arguments are valid then exit
if (!intervals.length) {
  process.exit(1);
}

intervals.forEach((elem) => {
  setTimeout(() => {
    process.stdout.write(`&\n`);
  }, elem * 1000);
});

// process.stdout.write('\n\n');