/**

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Vajira-Md
   * @author : Vajira Tech Info
   * @youtube : https://youtube.com/@gamingewingyt6216
   * @description : Vajira-Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.2
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Vajira Tech Info.
   * © 2023 Vajira-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/

const { tlang, ffmpeg ,smd , audioEditor} = require('../lib')
const fs = require('fs')
const { exec } = require('child_process')


//---------------------------------------------------------------------------
smd({pattern: "bass",desc: "adds bass in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "blown",desc: "adds blown in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "deep",desc: "adds deep in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "earrape",desc: "adds earrape in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "fast",desc: "adds fast in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "fat",desc: "adds fat in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "nightcore",desc: "adds nightcore in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "reverse",desc: "adds reverse in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "robot",desc: "adds robot in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "slow",desc: "adds slow in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "smooth",desc: "adds smooth in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
smd({pattern: "tupai",desc: "adds tupai in given sound",category: "audio",use: '<reply to any audio>',},async(Suhail, msg , text , {cmdName , isCreator}) => {try{return await audioEditor(Suhail,msg,cmdName,msg);}catch(e){ return await msg.error(e),console.log("Error in Audio Editing\n",e); } })
//---------------------------------------------------------------------------
