# bulb-icon-builder

Tool for building bulb icon library from figma

## Generating a new package version

1. Edit the [CHANGELOG.md](./CHANGELOG.md) file
   1. you can do this by viewing the file on github
   2. clicking the pen icon (hover text of `edit this file`)
   3. adding an entry at the top using the github editor
   4. in the input under **Commit changes** with the placeholder `Update CHANGELOG.md` add a meaningful commit message
      - for normal updates `chore(icons): trigger icons update` is great ✅
   5. selecting `Create a new branch for this commit and start a pull request.`
      - please use a branch name such as chore/bump-icons
   6. click the `Propose file change` button
2. Create Pull Request
   - if you followed the steps above github should now be on a page titled `Open a pull request`
   1. click the `Create pull request` button
3. Wait for our continuous integration tool to update your pull request
   - Your pull request will get updated with an additional commit titled
     - `generate(icons): check in react-package [ci skip]`
4. Have the pull request peer reviewed
5. Merge pull request
   1. on the pull request page, click the `Merge pull request` button

## Development | Getting started

1. Create a figma personal access token and add it to a .env file prefixed by `FIGMGA_PERSONAL_ACCESS_TOKEN=`.
   - learn about generating a file token at https://www.figma.com/developers/docs#access-tokens
2. Add the file key for the figma design kit to a .env file prefixed by `DESIGN_KIT_FILE_KEY=`.
   - learn about how to find the file key at https://www.figma.com/developers/docs#get-files-endpoint

ie. (note, these are example values and not real keys)

```
// .env
FIGMGA_PERSONAL_ACCESS_TOKEN=3513-4197ff56-fd89-3475-7894-3254jk3534j
DESIGN_KIT_FILE_KEY=YDuss21DSA89SDSAdfsDS9c4
```

You should then be able to run the `dev-build` script locally with the following command.

```sh
yarn run dev-build
```

This command will fetch the icons from figma, and generate a react package under `./packages/icons`.
