let env = () => {

  if (process.env.HEROKU === 'true') {
    return 'heroku'
  } else if (process.env.USERNAME === 'KaiLight') {
    return 'deathnote'
  } else {
    return 'default'
  }

};

module.exports = env()
