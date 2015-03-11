//to center a particular object pass $([object refrence])
//to create a topBar a particular object pass $([object refrence])

$(document).ready(function(){
        function centerScreen(param){
		param.css("position", "absolute");
		param.css("top", (($(window).height()-param.height())/2));
		param.css("left", (($(window).width()-param.width())/2));
	}
				
	function optimumLogoSize(param, scaleFactor){
		var width = $(window).height();
		var height = $(window).width();
		var paramwid = param.width();
		var paramhei = param.height();
		var scale = 0;
		if(width > height)
		{
			scale = (height*scaleFactor);
			if(paramwid > paramhei)
			{
				param.css("width", "auto");
				param.css("height", parseInt(scale*(paramhei/paramwid)));
			}else{
				param.css("width", scale);
				param.css("height", "auto");
			}
		}else
		{
			scale = (width*scaleFactor);
			if(paramwid > paramhei)
			{
				param.css("width", scale);
				param.css("height", "auto");
			}else{
				param.css("width", "auto");
				param.css("height", parseInt(scale*(paramwid/paramhei)));
			}
		}
					
	}
  
        function topBar(param){
        	param.css("position", "fixed");
        	$("body").css("border", "0px");
        	$("body").css("margin", "0px");
        	param.css("top", "0px");
        	param.css("left", "0px");
        	param.css("width", "100%");
        }
});


/* Agora database functions for use with MongoDB as JSON */

/* Agora database functions for use with MongoDB as JSON */

var Agora = new Mongo().getDB("AgoraDB"); //I think?

function createUser(userName)
{
	var userId = getIdentifier(userName);
	
	Agora.allUsers.insert(
		{
			userid: userId,
			name: userName,
			description: "",
			groups: []
		}
	);
	
	console.log("The user "+userName+" has been created.");
}

function editUserProfile(userName, description)
{
	var userId = getIdentifier(userName);
	
	Agora.allUsers.update(
		{ user_id: userId },
		{
			description: description
		}
	);
	
	console.log("The user "+userName+"'s profile has been edited.");
}

function editGroupForUser(userName, groupName, notify) /* notify should hould be boolean */
{
	var userId = getIdentifier(userName);
	var groupId = getIdentifier(groupName);
	
	Agora.allUsers.find( {userid: userId} ).groups.update(
		{ groupid: groupId },
		{
			notify: notify
		}
	);
	
	console.log(userName+"'s notification status for the group has been changed to "+notify+".");
}

function createGroup(groupName, type) /* Type should be Public or Private */
{
	var groupId = getIdentifier(groupName);
	
	Agora.allGroups.insert(
		{
			group_id: groupId,
			name = groupName,
			description: "",
			type: type,
			users: []
		}
	);
	
	console.log("The group "+groupName+" has been created.");
}

function editGroupProfile(groupName, type, description) /* Type should be Public or Private */
{
	var groupId = getIdentifier(groupName);
	
	/*if group is private then there is some other shit that needs to happen, apparently?*/
	
	Agora.allGroups.update(
		{ group_id: groupId }
		{
			description: description
			type: type
		}
	);
	
	console.log("The group "+groupName+"'s description has been changed.");
}

function addUserToGroup(userName, groupName)
{
	/*get unique id from facebook or just generate from the user's name somehow?*/
	
	var userId = getIdentifier(userName);
	var groupId = getIdentifier(groupName);
	
	/*if group is private then there is some other shit that needs to happen, apparently?*/
	
	Agora.allUsers.find( {userid: userId} ).groups.insert(
		{
			group_id: groupId,
			name: groupName,
			notify: true
		}
	);
	Agora.allGroups.find( {groupid: groupId} ).users.insert(
		{
			user_id: userId,
			name: userName
		}
	);
	
	console.log(userName+" has been added to "+groupName+".");
}

function removeUserFromGroup(userName, groupName)
{
	var userId = getIdentifier(userName);
	var groupId = getIdentifier(groupName);
	
	Agora.allUsers.find( {userid: userId} ).groups.remove(
		{ group_id: groupId },
		{ justOne: true }
	);
	Agora.allGroups.find( {groupid: groupId} ).users.remove(
		{ user_id: userId },
		{ justOne: true }
	);
	
	console.log(userName+" has been removed from "+groupName+".");
}

/* Auxiliary functions */

function getIdentifier(name)
{
	return name.trim().toLowerCase().replace(" ", "_");
}

