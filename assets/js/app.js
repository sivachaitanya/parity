// To apply as a JS wiz/full stack guy or gal, give us some code (jobs@parity.io) that processes this into a lovely-looking web (HTML/CSS/JS) document
var job = {
	"headline": "Javascript wizard with good sense of design",
	"essentials": {
		"locations": ["berlin", "london"],
		"employment": EmploymentType().Permanent,
		"startdate": (new Date()).getTime(),
		"salary": {
			"status": TaxStatus().Gross,
			"interval": Interval().Year,
			"currency": "GBP",
			"amount": 35000,
			"stockoptions": true,
		},
		"industry": "Blockchain",
		"companysize": CompanySize().TenToTwenty,
		"teamsize": { "min": 1, "max": 5 },
	},
	"methodology": {
		"codereviews": true,
		"prototyping": true,
		"pairprogramming": true,
		"failfast": true,
		"unittests": true,
		"integrationtests": true,
		"buildserver": BuildServers().Travis,
		"staticcodeanalysis": CodeAnalysisTools().NotYetChosen,
		"versioncontrol": VersionControlSystem().Git,
		"issuetracker": IssueTrackers().GitHub,
		"knowledgerepo": KnowledgeRepos().GitHubWiki,
		"standups": true,
		"qaprotocol": true,
		"agilemanagement": AgileManagementSystems().Kanban,
		"freedomovertools": true,
		"onecommandbuild": true,
		"quickstart": true,
		"commitondayone": true,
	},
	"specs": {
		"workload": 1.0,
		"workweek": 40 * 60 * 60,
		"holidays": 20,
		"corehours": { from: 1100, to: 1700 },
		"travel": TravelOptions().Plentiful,
		"remote": RemoteWorking().Negotiable,
		"relocationpackage": RelocationPackages().Negotiable,
	},
	"profile": {
		"newfeatures": 70,
		"clientsupport": 20,
		"documentation": 10,
		"maintenance": 0,
		"meetings": 0,
	},
	"equipment": {
		"operatingsystem": [OperationSystems().MacOSX, OperationSystems().Ubuntu],
		"computer": MachineType().Laptop,
		"monitors": Monitors().Negotiable,
	},
	"technologies": {
		"css3": Level().Expert,
		"html5": Level().Expert,
		"javascript": Level().Expert,
		"node": Level().Expert,
		"rest": Level().Good,
		"jsonrpc": Level().Good,
		"uiux": Level().Good,
		"design": Level().Good,
		"oneof": {
			"junit": Level().Good,
			"mocha": Level().Good,
			"jasmine": Level().Good,
			"selenium": Level().Good,
		},
		"oneof": {
			"react": Level().Familiar,
			"meteor": Level().Familiar,
			"angular": Level().Familiar,
		},
		"p2p": Level().Familiar,
		"ethereum": Level().Familiar,
		"blockchain": Level().Familiar,
		"oneof": {
			"rust": Level().Familiar,
			"haskell": Level().Familiar,
			"ruby": Level().Familiar,
			"python": Level().Familiar,
			"cpp": Level().Familiar,
		},
		"gametheory": Level().Familiar,
		"cryptography": Level().Familiar,
		"boardgames": Level().Familiar,
	},
	"other": [
		"we do retreats",
		"we change the world",
		"best team around",
		"hardcore",
	],
	"misc": {
		"training": TrainingType().Informal,
		"fossphilosophy": FOSS().AlwaysOpen,
		"codingretreats": true,
		"conferences": [ConferencePotential().Speaking, ConferencePotential().Attending],
		"teamevents": true,
		"healthcare": true,
		"mobilephone": false,
		"kitchen": true,
		"canteen": false,
		"freestuff": ["coffee", "beverages", "snacks", "bikeparking", "playroom"],
	}
}

function EmploymentType() { return enumerate("Permanent", "Temporary", "Project"); }
function TaxStatus() { return enumerate("Gross", "Net"); }
function Interval() { return enumerate("Week", "Month", "Year"); }
function CompanySize() { return enumerate("LessThanTen", "TenToTwenty", "TwentyToFifty", "FiftyToTwoHundred", "MoreThanTwoHundred"); }
function VersionControlSystem() { return enumerate("NotYetChosen", "Git"); }
function IssueTrackers() { return enumerate("NotYetChosen", "GitHub"); }
function BuildServers() { return enumerate("NotYetChosen", "Jenkins", "Travis"); }
function CodeAnalysisTools() { return enumerate("NotYetChosen"); }
function KnowledgeRepos() { return enumerate("NotYetChosen", "GitHubWiki"); }
function AgileManagementSystems() { return enumerate("NotYetChosen", "Kanban"); }
function TravelOptions() { return enumerate("None", "Possible", "Plentiful"); }
function RemoteWorking() { return enumerate("No", "Negotiable", "Required"); }
function RelocationPackages() { return enumerate("Nonealse", "Negotiable"); }
function OperationSystems() { return enumerate("MacOSX", "Ubuntu", "Windows"); }
function MachineType() { return enumerate("Workstation", "Laptop"); }
function Monitors() { return enumerate("Negotiable"); }
function Level() { return enumerate("Familiar", "Good", "Expert"); }
function TrainingType() { return enumerate("None", "Informal", "Formal", "External"); }
function ConferencePotential() { return enumerate("Attending", "Speaking"); }
function FOSS() { return enumerate("Closed", "SometimesOpen", "AlwaysOpen"); }

//https://github.com/RougeWare/Micro-JS-Enum/tree/master/lib
function enumerate() { v=arguments;s={all:[],keys:v};for(i=v.length;i--;)s[v[i]]=s.all[i]=v[i];return s };


window.App = {
  
  start: function() {
    var self = this;
     var img = document.createElement("img");
     var img1 = document.createElement("img");
     var img2 = document.createElement("img");
     var img3 = document.createElement("img");
     var img4 = document.createElement("img");
     var img5 = document.createElement("img");
     var img6 = document.createElement("img");
     var img7 = document.createElement("img");
     var img8 = document.createElement("img");
     var img9 = document.createElement("img");
     var img10 = document.createElement("img");
     var img11 = document.createElement("img");
     var img12 = document.createElement("img");
     var img13 = document.createElement("img");
     var img14 = document.createElement("img");
     var img15 = document.createElement("img");
     var img16 = document.createElement("img");
     var img17 = document.createElement("img");
     var img18= document.createElement("img");
     var img19 = document.createElement("img");
     var img20 = document.createElement("img");
     var img21 = document.createElement("img");
     var img22 = document.createElement("img");
     var img23 = document.createElement("img");
     var img24= document.createElement("img");
    document.getElementById('headline').innerHTML = job.headline

    document.getElementById('employment_type').innerHTML = job.essentials.employment
    var date = new Date( job.essentials.startdate)
     var year = date.getFullYear();
     var month = (1 + date.getMonth()).toString();
     month = month.length > 1 ? month : '0' + month;
     var day = date.getDate().toString();
     day = day.length > 1 ? day : '0' + day;
     document.getElementById('start_date').innerHTML =  day + '-' + month + '-' + year;
     document.getElementById('salary').innerHTML =  job.essentials.salary.amount+" "+job.essentials.salary.currency+" "+job.essentials.salary.status
     document.getElementById('interval').innerHTML =  job.essentials.salary.interval
     img.src= job.essentials.salary.stockoptions ? "images/success.png" : "images/error.png"
     document.getElementById('stock').appendChild( img)
     document.getElementById('industry').innerHTML = job.essentials.industry
     document.getElementById('company_size').innerHTML = job.essentials.companysize
     document.getElementById('team_size').innerHTML = job.essentials.teamsize.min+"-"+job.essentials.teamsize.max

     document.getElementById('work_load').innerHTML = job.specs.workload
     document.getElementById('work_week').innerHTML = job.specs.workweek
     document.getElementById('holidays').innerHTML = job.specs.holidays
     document.getElementById('core_hours').innerHTML = job.specs.corehours.from+"-"+job.specs.corehours.to
     document.getElementById('travel').innerHTML = job.specs.travel
     document.getElementById('remote').innerHTML = job.specs.remote
     document.getElementById('relocation_package').innerHTML = job.specs.relocationpackage

     document.getElementById('build_server').innerHTML = job.methodology.buildserver
     document.getElementById('static_code_analysis').innerHTML = job.methodology.staticcodeanalysis
     document.getElementById('version_control').innerHTML = job.methodology.versioncontrol
     document.getElementById('issue_tracker').innerHTML = job.methodology.issuetracker
     document.getElementById('knowledge_repo').innerHTML = job.methodology.knowledgerepo
     img1.src= job.methodology.codereviews ? "images/success.png" : "images/error.png"
     document.getElementById('code_reviews').appendChild(img1)
     img2.src= job.methodology.prototyping ? "images/success.png" : "images/error.png"
     document.getElementById('prototyping').appendChild(img2)
     img3.src= job.methodology.pairprogramming ? "images/success.png" : "images/error.png"
     document.getElementById('pair_programming').appendChild(img3)
     img4.src= job.methodology.failfast ? "images/success.png" : "images/error.png"
     document.getElementById('fail_fast').appendChild(img4)
     img5.src= job.methodology.unittests ? "images/success.png" : "images/error.png"
     document.getElementById('unit_tests').appendChild(img5)
     img6.src= job.methodology.integrationtests ? "images/success.png" : "images/error.png"
     document.getElementById('integration_tests').appendChild(img6)
     img7.src= job.methodology.standups ? "images/success.png" : "images/error.png"
     document.getElementById('standups').appendChild(img7)
     img8.src= job.methodology.qaprotocol ? "images/success.png" : "images/error.png"
     document.getElementById('qa_protocol').appendChild(img8)
     img9.src= job.methodology.agilemanagement ? "images/success.png" : "images/error.png"
     document.getElementById('agile_management').appendChild(img9)
     img10.src= job.methodology.freedomovertools ? "images/success.png" : "images/error.png"
     document.getElementById('freedom_over_tools').appendChild(img10)
     img11.src= job.methodology.onecommandbuild ? "images/success.png" : "images/error.png"
     document.getElementById('one_command_build').appendChild(img11)
     img12.src= job.methodology.quickstart ? "images/success.png" : "images/error.png"
     document.getElementById('quick_start').appendChild(img12)
     img13.src= job.methodology.commitondayone ? "images/success.png" : "images/error.png"
     document.getElementById('commit_on_day_one').appendChild(img13)

     document.getElementById('new_features').innerHTML = job.profile.newfeatures
     document.getElementById('client_support').innerHTML = job.profile.clientsupport
     document.getElementById('documentation').innerHTML = job.profile.documentation
     document.getElementById('maintainence').innerHTML = job.profile.maintenance
     document.getElementById('meetings').innerHTML = job.profile.meetings

     document.getElementById('computer').innerHTML = job.equipment.computer
     document.getElementById('monitors').innerHTML = job.equipment.monitors

     document.getElementById('css3').innerHTML = job.technologies.css3
     document.getElementById('html5').innerHTML = job.technologies.html5
     document.getElementById('javascript').innerHTML = job.technologies.javascript
     document.getElementById('node').innerHTML = job.technologies.node
     document.getElementById('rest').innerHTML = job.technologies.rest
     document.getElementById('json_rpc').innerHTML = job.technologies.jsonrpc
     document.getElementById('uiux').innerHTML = job.technologies.uiux
     document.getElementById('design').innerHTML = job.technologies.design
     document.getElementById('p2p').innerHTML = job.technologies.p2p
     document.getElementById('ethereum').innerHTML = job.technologies.ethereum
     document.getElementById('blockchain').innerHTML = job.technologies.blockchain
     document.getElementById('cryptography').innerHTML = job.technologies.cryptography
     document.getElementById('board_games').innerHTML = job.technologies.boardgames

     
     document.getElementById('retreats').innerHTML = job.other["0"]
     document.getElementById('changetheworld').innerHTML = job.other["1"]
     document.getElementById('bestteam').innerHTML = job.other["2"]
     document.getElementById('hardcore').innerHTML = job.other["3"]

     document.getElementById('training').innerHTML = job.misc.training
     document.getElementById('foss_philosophy').innerHTML = job.misc.fossphilosophy
     img19.src= job.misc.codingretreats ? "images/success.png" : "images/error.png"
     document.getElementById('coding_retreats').appendChild(img19)
     document.getElementById('conferences').innerHTML = job.misc.conferences
     img20.src= job.misc.teamevents ? "images/success.png" : "images/error.png"
     document.getElementById('team_events').appendChild(img20)
     img21.src= job.misc.healthcare ? "images/success.png" : "images/error.png"
     document.getElementById('health_care').appendChild(img21)
     img22.src= job.misc.mobilephone ? "images/success.png" : "images/error.png"
     document.getElementById('mobile_phone').appendChild(img22)
     img23.src= job.misc.kitchen ? "images/success.png" : "images/error.png"
     document.getElementById('kitchen').appendChild(img23)
     img24.src= job.misc.canteen ? "images/success.png" : "images/error.png"
     document.getElementById('canteen').appendChild(img24)
     
     for(var i= 0; i < job.misc.freestuff.length;i++){
         console.log('Current - '+job.misc.freestuff[i])
         switch (job.misc.freestuff[i]) {
             case "coffee":
                   img14.src=  "images/coffee.png" 
                   document.getElementById('free_stuff').appendChild(img14)
                 break;
             case "beverages":
                   img15.src=  "images/drink.png" 
                   document.getElementById('free_stuff').appendChild(img15)
                 break;
             case "snacks":
                   img16.src=  "images/sandwich.png" 
                   document.getElementById('free_stuff').appendChild(img16)
                 break;
             case "bikeparking":
                  img17.src=  "images/bikeparking.png" 
                   document.getElementById('free_stuff').appendChild(img17)
                 break;
             case "playroom":
                  img18.src=  "images/pacman.png" 
                   document.getElementById('free_stuff').appendChild(img18)
                 break;
             default:
                 break;
         }
        document.getElementById('free_stuff').innerHTML += '  '
     }
     
     },
    
    };

window.addEventListener('load', function() { 
   
  App.start();
});







