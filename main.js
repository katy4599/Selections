import input from 'input';

async function main() {
        const drivingAge = 18;
        const myAge = 15;
        const hasLicense = await input.confirm('Do you have your license?');
        const n = (18 - myAge);

    if (myAge >= drivingAge && hasLicense) {
        console.log('You can drive!');
    }

    else {
        if (myAge < drivingAge){
            console.log('Wait ' + n + ' years!');
        }
        else{
            console.log('Go get your license!')
        }
    }
}

main();