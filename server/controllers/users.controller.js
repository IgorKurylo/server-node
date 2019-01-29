const express=require('express')

const { User } = require('../models')
const { to,responseError,responseSuccess } = require('../services/util.services')

module.exports={
	async getAll(req,res)
	{
		const [error,users] = await to(User.findAll())
		
		if(error) return responseError(res,error,400)
		
		return responseSuccess(res,{users})
	},
	async create(req,res){
		const {firstName,lastName,email,password}=req.body
		
		const [error,user] = await to(User.create({firstName,lastName,email,password}))

		if(error) return responseError(res,error,400)
		
		return responseSuccess(res,{id:user.id},200)
	}
}

