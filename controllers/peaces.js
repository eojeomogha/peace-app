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

async function index(req, res) {
  // Pagination function
  const page = parseInt(req.query.page) || 1; 
  const itemsPerPage = 10; 

  try {
    // Search function
    const searchKeyword = req.query.search || '';
    const query = searchKeyword
      ? { name: { $regex: searchKeyword, $options: 'i' } } // Search by name (case-insensitive)
      : {};
    // This basically gets the total number of items matching the search query
    const totalItems = await Peace.countDocuments(query);
    // Math function for calculating the total number of pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // This is for finding the items matching the search query and paginating  results
    const peaces = await Peace.find(query)
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    res.render('peaces/index', {
      peaces,
      currentPage: page,
      totalPages,
      searchKeyword
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
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
