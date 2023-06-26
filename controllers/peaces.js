const { default: mongoose } = require('mongoose');
const Peace = require('../models/peace');

module.exports = {
  home,
  show, 
  index,
  new: newPage,
  edit,
  create,
  update,
  delete: deletePage
}

//============================= GET FUNCTIONS=========================//
function home(req, res) {
  res.render('peaces/home'); 
}

async function index(req, res){
  try {
    const peaces = await Peace.find({})
    res.render('peaces/index', {
      peaces
    })
  } catch {
    console.log('error')
  }
}

async function show(req, res,){
  try {
    const peace = await Peace.findById(req.params.id)
    res.render('peaces/show', {
      peace
    })
  } catch {
    console.log('error')
  }
}

function newPage(req, res) {
  res.render('peaces/new')
}

async function edit(req, res){
  try {
    const peace = await Peace.findById(req.params.id)
    res.render('peaces/edit', {
      peace
    })
  } catch {
    console.log('error')
  }
}

//============================= ACTIONS FUNCTIONS =========================//


async function create(req, res) {
  try {
    await Peace.create(req.body)
    res.redirect('/all')
  } catch {
    console.log('error')
  }
}

async function update(req, res) {
  try {
    await Peace.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/all' + req.params.id)
  } catch {
    console.log('error')
  }
}

async function deletePage(req, res) {
  try{
    await Peace.findByIdAndRemove(req.params.id)
    res.redirect('/all')
  } catch{
    console.log('error')
  }
}