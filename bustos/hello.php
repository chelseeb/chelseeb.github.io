<?php

// Personal Information
$firstName = "CHELSEE";
$middleName = "L.";
$lastName = "BUSTOS";
$fullName = $firstName . " " . $middleName . " " . $lastName;

$school = "FEU INSTITUTE OF TECHNOLOGY";
$course = "BSIT-BA (Bachelor in Science in Information Technology with a Specialization in Business Analytics)";
$year = "2nd Year";

$emailAddress = "chelseebustos@gmail.com";

// Enrolled Subjects
$subjects = [
    "CCS0043L - Applications Development and Emerging Technologies (Lab)",
    "CCS0043 - Applications Development and Emerging Technologies (Lec)",
    "CCS0103 - Technopreneurship",
    "GED0031 - Purposive Communication",
    "GED0081 - College physics 1 (Lec)",
    "GED0081L - College physics 1 (Lab)",
    "IT0075 - Fundamentals of Enterprise Management",
    "IT0087 - Business Process for Computing Systems"
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Information</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #e0f7fa; 
            color: #263238; 
            margin: 10px;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .profile-card {
            background-color: #fff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 80%;
            max-width: 600px;
        }
        h1 {
            color: black; 
            margin-bottom: 20px;
            font-size: 2.5em;
            letter-spacing: 1px;
        }
        .info-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            text-align: left;
        }
        .info-item i {
            margin-right: 15px;
            color: #009688; 
            font-size: 1.5em;
            width: 30px;
            text-align: center;
        }
        .info-item strong {
            color: #546e7a; 
            margin-right: 5px;
        }
        .subjects-section {
            background-color: #f9fbe7; 
            padding: 30px;
            border-radius: 10px;
            margin-top: 30px;
            width: 80%;
            max-width: 600px;
            text-align: left;
        }
        h2 {
            color: green; 
            margin-bottom: 20px;
            border-bottom: 3px solid #7cb342;
            padding-bottom: 8px;
            font-size: 2em;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            background-color: #fffde7; 
            padding: 15px;
            margin-bottom: 8px;
            border-left: 6px solid #aeea00; 
            border-radius: 6px;
            display: flex;
            align-items: center;
        }
        li::before {
            content: "\f02d"; 
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            margin-right: 15px;
            color: #689f38; 
            font-size: 1.2em;
        }
        .animated-border {
            position: relative;
            padding: 20px;
            border: 2px solid transparent;
            background: linear-gradient(to right, green, green, yellow, yellow);
            background-clip: padding-box;
            border-radius: 12px;
            margin-bottom: 30px;
            width: 85%;
            max-width: 650px;
        }
        .animated-border::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            margin: -2px;
            border-radius: inherit;
            background: linear-gradient(to right, green, green, yellow, yellow);
            animation: border-animation 5s infinite linear;
        }
        @keyframes border-animation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQmXVf9TB/5sGczn0jl0jjeWUAVyVICoPurjhQ9JdJx7JMwNNmaMgnSdR2yr0klhTNHQXvJmVCa7Yw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

    <div class="animated-border">
        <div class="profile-card">
            <h1><i class="fas fa-id-card-alt"></i> <?php echo $fullName; ?></h1>
            <div class="info-item">
                <i class="fas fa-university"></i>
                <strong>School:</strong> <?php echo $school; ?>
            </div>
            <div class="info-item">
                <i class="fas fa-graduation-cap"></i>
                <strong>Course:</strong> <?php echo $course; ?>
            </div>
            <div class="info-item">
                <i class="fas fa-calendar-alt"></i>
                <strong>Year Level:</strong> <?php echo $year; ?>
            </div>
            <div class="info-item">
                <i class="fas fa-envelope"></i>
                <strong>Email Address:</strong> <?php echo $emailAddress; ?>
            </div>
        </div>
    </div>

    <div class="subjects-section">
        <h2><i class="fas fa-book-open"></i> Enrolled Subjects:</h2>
        <ul>
            <?php foreach ($subjects as $subject): ?>
                <li><?php echo $subject; ?></li>
            <?php endforeach; ?>
        </ul>
    </div>

</body>
</html>

