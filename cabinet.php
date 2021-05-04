<?php
//var_dump($COOKIE);
if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) == '') {
    header("Location: index.html");
    exit;
};

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cabinet</title>
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <link rel="stylesheet" href="css/style.css" media="screen,projection">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    
</head>
<body>
    <div class="conteiner">
        <div class="row">
            <div class="col l12 center-align">
                <h1 class="user-cabinet-header">User cabinet</h1>
            </div>
            <div class="col l12 center-align">
                <button id="logout" class="waves-effect waves-light btn pink lighten-2">
                    <i class="material-icons right">logout</i>Logout</button>
            </div>            
        </div>
        <div class="row">
            <div class="col l6">
                <form>                    
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="cab-name" type="text" class="validate">
                            <label class="active" for="cab-name">Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="cab-pass" type="text" class="validate">
                            <label class="active" for="cab-pass">Password</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="cab-birthday" type="text" class="datepicker"">
                            <label class="active" for="cab-birthday">Birthday</label>
                        </div>  
                        <div class="col s12">
                            <p>
                                <label>
                                <input name="group1" type="radio" checked />
                                <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input name="group1" type="radio" />
                                <span>Female</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input name="group1" type="radio"  />
                                <span>Other</span>
                                </label>
                            </p>
                        </div>                     
                        <div class="col s12 right-align">
                            <button id="cab-submit" class="waves-effect waves-light btn pink lighten-2">Update</button>
                            
                        </div>
                    </div>
                    
                
                </form>
            </div>
        </div>
    </div>    
 
    
    
    

    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js_mat/materialize.min.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/get_user_data.js"></script>    
    <script src="js/logout.js"></script>
    <script src="js/main.js"></script>
</body>
</html>



