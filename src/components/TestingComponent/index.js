import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  Breadcrumb,
  Row,
  Col
} from 'antd';
import TestParameter from './TestParameterMaster';
import TestSpceification from './TestParamatereSpecification';
import TestEquation from './TestEquationConfig';
import TestCon from './TestConfiguration';
// import FinalTest from './FinalTestingConfig';
import FinshProduct from './FinalProduct/ManageFinshProductMix';
import FinalProductParameter from './FinalProductParameter';
import Complete from './Complete';
import ManageTestConfiguration from './ManageTestConfiguration';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    color:'#eef6fc'
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Test Configuration', 'Test Parameter Specification', 'Additional Parameter Creation','Completed','Manage Test Configuration'];
}
let d=[];
function testConfig (material){
  d.push(material)
    return d;
  
  
}

// function getStepContent(step) {
//   console.log(testConfig()) ;
//   switch (step) {
//     case 0:
//        d=[];
//       // for(var i=0;i<testCon)
//       //   testConfig().pop()
//       return <TestCon config={testConfig}/>;
//     case 1:
     
//       return <TestSpceification/>;
//     case 2:
//       return <TestEquation/>;
//       case 3:
//       return <FinalTest/>;
//     default:
//       return 'Unknown step';
//   }
 
// }

function getStepContent(step) {
  console.log(testConfig()) ;
  switch (step) {
    case 0:
       d=[];
      // for(var i=0;i<testCon)
      //   testConfig().pop()
      return <TestCon config={testConfig}/>;
    case 1:
     
      return <TestSpceification/>;
    case 2:
      return<FinalProductParameter/>;
      // case 3:
      // return <TestEquation/> ;
      case 3:
      return <Complete/>;
      case 4:
        return<ManageTestConfiguration/>
    default:
      return 'Unknown step';
  }
 
}



export default function MaterialConfigS() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isStepOptional = step => {
    return step === 1;
  };

   

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext();
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <React.Fragment>
    <Breadcrumb style={{
        margin: '16px 0'
    }}>
        <Breadcrumb.Item>Testing</Breadcrumb.Item>
        <Breadcrumb.Item>Test Configuration</Breadcrumb.Item>
    </Breadcrumb>
    <div
        style={{
        padding: 12,
        background: '#eef6fc',
        minHeight: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
    }}>
    <div className={classes.root}
    style={{background:'#eef6fc'}}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}  style={{background:'#eef6fc',width:'100%'}}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepOptional(index)) {
            buttonProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <Row>
              <Col span={16}>

              </Col>
              <Col span={8}>
              <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )}
   <br/>
              {activeStep !== steps.length &&
                (completed.has(activeStep) ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                  
                ) : (
              
                  <Button variant="contained" color="primary" onClick={handleComplete}>
                   
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
                </Col>
            </Row>
           
          </div>
        )}
      </div>
      </div>
    </div>
         
    </React.Fragment>
  );
}
