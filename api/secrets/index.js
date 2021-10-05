/**
  If no fallback is provided, TESTS WON'T WORK and other
  developers cloning this repo won't be able to run the project as is.
 */
module.exports = {
JWT_SECRET: process.env.JWT_SECRET || 'shh',
}
