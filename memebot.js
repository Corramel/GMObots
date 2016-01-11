var Discord = require("discord.js");
var request = require("request");
var express = require("express");
var cheerio = require("cheerio");
var moment = require("moment");

client.login(process.argv[2], process.argv[3]).catch((e) => console.log(e));
