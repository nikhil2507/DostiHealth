import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Selection from '../pages/Selection';
import Plan from '../pages/corporate/Plan';
import Email from '../pages/corporate/Email';
import checkInsurance from '../pages/corporate/checkInsurance';
import AddAAdhar from '../pages/corporate/AddAAdhar';
import BankAccount from '../pages/corporate/BankAccount';
import ifInsurance from '../pages/corporate/ifInsurance';
import insuanceCoverage from '../pages/corporate/insuanceCoverage';
import Passport from '../pages/corporate/Passport';
import Question from '../pages/corporate/Question';
import ValidateDetails from '../pages/corporate/ValidateDetails';
import Company from '../pages/corporate/Company';
import CompanyNum from '../pages/corporate/CompanyNum';
import QuesAndDetails from '../pages/corporate/QuesAndDetails';
import selfEmail from '../pages/self/selfEmail';
import aadharScan from '../pages/self/aadharScan';
import aadharScanDone from '../pages/self/aadharScanDone';
import selfPassport from '../pages/self/selfPassport';
import Salary from '../pages/corporate/Salaray';
import selfValidateDetails from '../pages/self/selfValidateDetails';
import selfAddAAdhar from '../pages/self/selfAddAAdhar';
import selfcheckInsurance from '../pages/self/selfcheckInsurance';
import selfifInsurance from '../pages/self/selfifInsurance';
import selfinsuanceCoverage from '../pages/self/selfinsuanceCoverage';
import selfPlan from '../pages/self/selfPlan';
import selfQuesAndDetails from '../pages/self/selfQuesAndDetails';
import selfBankAccount from '../pages/self/selfBankAccount';
import selfQuestion from '../pages/self/selfQuestion';
import face from '../pages/profile/face';
import log from '../pages/profile/log';
import submitClaim from '../pages/profile/submitClaim';
import bill from '../pages/profile/bill';
import photo from '../pages/profile/photo';
import discussion from '../pages/profile/discussion';
import drop from '../pages/profile/drop';
import dropTwo from '../pages/profile/dropTwo';
import dropThree from '../pages/profile/dropThree';
import menu from '../pages/profile/menu';
import surgery from '../pages/profile/surgery';
import kneeSurgery from '../pages/profile/kneeSurgery';
import price from '../pages/profile/price';
import dentist from '../pages/profile/dentist';
import splash from '../pages/splash';
import location from '../pages/profile/location';
import medicine from '../pages/profile/medicine';
import doctor from '../pages/profile/doctor';
import childDoctor from '../pages/profile/childDoctor';
import one from '../pages/profile/one';
import two from '../pages/profile/two';
import three from '../pages/profile/three';
import four from '../pages/profile/four';
import five from '../pages/profile/five';
import six from '../pages/profile/six';
import seven from '../pages/profile/seven';
import eight from '../pages/profile/eight';


const screens = {
    screen0: {
        screen: splash,
        navigationOptions: {
            headerShown: false
        }
    },    
    
    screen1: {
        screen: Selection,
        navigationOptions: {
            headerShown: false
        }
    },
    
    screen2 : {
        screen: Email,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        },
    },

    
    screen3 : {
        screen: Passport,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
    screen4 : {
        screen: Company,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
    screen5 : {
        screen: CompanyNum,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
    screen6 : {
        screen: ValidateDetails,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
    screen7 : {
        screen: checkInsurance,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
    screen8 : {
        screen: insuanceCoverage,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
    screen9 : {
        screen: ifInsurance,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen10 : {
        screen: Salary,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },    

    screen11 : {
        screen: Plan,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen12 : {
        screen: QuesAndDetails,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen13 : {
        screen: Question,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen14 : {
        screen: BankAccount,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    // Self Employed
    
    screen15 : {
        screen: selfEmail,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen16 : {
        screen: selfPassport,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen17 : {
        screen: aadharScan,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen18 : {
        screen: aadharScanDone,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen19 : {
        screen: selfValidateDetails,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    
    screen20 : {
        screen: selfAddAAdhar,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen21 : {
        screen: selfcheckInsurance,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    
    screen22 : {
        screen: selfifInsurance,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen23 : {
        screen: selfinsuanceCoverage,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen24 : {
        screen: selfPlan,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen25 : {
        screen: selfQuesAndDetails,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen26 : {
        screen: selfBankAccount,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen27 : {
        screen: selfQuestion,
        navigationOptions:{
            title: '',
            headerTintColor: '#53AFFF',
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    // Face
    screen29 : {
        screen: submitClaim,
            navigationOptions: {
                headerShown: false
            },
            headerTransparent: true,
    },
    screen28 : {
        screen: log,
        navigationOptions:{
            title: '',
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen30 : {
        screen: bill,
        navigationOptions:{
            title: '',
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen31 : {
        screen: discussion,
        navigationOptions:{
            title: '',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen32 : {
        screen: drop,
        navigationOptions:{
            title: '',
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen33 : {
        screen: submitClaim,
        navigationOptions:{
            title: '',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen34 : {
        screen: location,
        navigationOptions:{
            title: '',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen35 : {
        screen: price,
        navigationOptions: {
            headerShown: false
        }
    },
    screen36 : {
        screen: menu,
        navigationOptions:{
            title: '',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen37 : {
        screen: dropTwo,
        navigationOptions:{
            title: '',
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen38 : {
        screen: photo,
        navigationOptions:{
            title: '',
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen39 : {
        screen: surgery,
        navigationOptions:{
            title: '',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: 140
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen40 : {
        screen: kneeSurgery,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen41 : {
        screen: dentist,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen42 : {
        screen: dropThree,
        navigationOptions:{
            title: '',
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontSize: 22,
                left: 80
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen43 : {
        screen: face,
        navigationOptions:{
            title: 'PROFILE',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
                elevation: 5
            }
        }
    },

    screen44 : {
        screen: medicine,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen45 : {
        screen: doctor,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen46 : {
        screen: childDoctor,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen47 : {
        screen: one,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen48 : {
        screen: two,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen49 : {
        screen: three,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen50 : {
        screen: four,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen51 : {
        screen: five,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen52 : {
        screen: six,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },
    screen53 : {
        screen: seven,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    screen54 : {
        screen: eight,
        navigationOptions:{
            title: 'DETAILS',
            headerTintColor: '#00B17B',
            headerTitleStyle: {
                fontSize: 22,
                left: "80%"
              },
            headerTransparent: true,
            headerStyle: {
                backgroundColor: '#fff',
            }
        }
    },

    
}


const stack = createStackNavigator(screens);

export default createAppContainer(stack);