import faker from "faker";



export function getUser(name){
    var url = "https://api.github.com/users/"+name+"/repos";
    return fetch(url).then(function(response){
        return response.json();
    });
}


/** Server */
export function generateData(count) {
    var data = [];
    for (let index = 0; index < count; index++) {
        data.push({
            name: faker.name.findName(),
            title: faker.company.companyName(),
            url: faker.internet.url(),
            description: faker.hacker.phrase() + faker.hacker.phrase(),
            cover_image: faker.image.fashion(),
            profile_img: faker.image.avatar(),
            tag: faker.hacker.phrase(),
            date: faker.date.recent()
        })
    }
    return data;
}
/**Server data end */