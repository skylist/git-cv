# GIT-CV
GitHub CV maked in React page, all data are consumed from GitHub-Api and data repository

Obs.: Before start development create a github repository: `YOU_USERNAME-data-cv` Create file `data.json` with template: 
```json
{
   "info_contacts": [
       {
           "label": "IMPORT_NAME",
           "from": "FROM_NAME",
           "link": "URL_FOR_SOCIAL"
       }
   ],
   "skill_level": [
        {
            "skill": "PROGRAMMING_LANGUAGE",
            "level": "NUMBER_ABILITY"
        }
    ]
}
```

## Development 
you can run app with:
### run: `npm start` or `yarn start`
> Obs.:
> 
> In `.env` file alter `REACT_APP_USERNAME=your_github_username` env variable for yout GitHub username

## Build
for build you need set env variable `REACT_APP_USERNAME`
### run: `REACT_APP_USERNAME=SkyList yarn run build`
> Obs.:
> 
> For build on windows execute: set 'REACT_APP_USERNAME=SkyList' && yarn run build