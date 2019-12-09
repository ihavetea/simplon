


//GETTERS
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        //this.thing is TRUE
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'


  // ================================ WHAT IS _ FOR // DIFF BETWEEN LET CONST // WHY .THIS // INTERET? STOKAGE DONNEES JSON?

  //SETTERS
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if ((typeof num === 'number') && (num >= 0)){
          this._numOfSensors = num 
      }
      else{
        console.log('Pass in a number that is greater than or equal to 0')
      }

    }

  };

console.log(robot.numOfSensors)


robot.numOfSensors = 100;

console.log(robot.numOfSensors)

// FACTORY

const robotFactory = (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep() {
        console.log("beep Boop");
      }
    }
  }
  
  
  const tinCan = robotFactory('P-500', true);
  
  tinCan.beep()

  // WTF

  function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)


  // DESTRUCTURED ASSIGNMENTS WTF


  // BUILT IN OBJECTS

  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Declare newRobot below this line:

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot );


console.log(newRobot);