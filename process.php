<?php
// process.php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

// simple server-side sanitization
$name = trim($_POST['name'] ?? '');
$roll_no = trim($_POST['roll_no'] ?? '');
$email = trim($_POST['email'] ?? '');
$course = trim($_POST['course'] ?? '');
$phone = trim($_POST['phone'] ?? '');

// validate basic fields
if (empty($name) || empty($roll_no) || empty($email) || empty($course)) {
    die('Please fill all required fields.');
}

try {
    $stmt = $pdo->prepare('INSERT INTO registrations (name, roll_no, email, course, phone) VALUES (?, ?, ?, ?, ?)');
    $stmt->execute([$name, $roll_no, $email, $course, $phone]);
    // redirect to a success page or show message
    header('Location: index.html?success=1');
    exit;
} catch (Exception $e) {
    // in production, don't echo exception details
    die('Registration failed: ' . $e->getMessage());
}