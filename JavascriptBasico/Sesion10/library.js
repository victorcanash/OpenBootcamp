import moment from 'moment';

const greet = (name) => {
	console.log(`Hola, ${name}`);
};

const hour = () => {
  return moment().hour();
};

export { greet as greet, hour as hour };