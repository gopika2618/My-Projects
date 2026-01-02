<?php
require 'db.php';

// Query the database
$stmt = $pdo->query("SELECT * FROM registrations ORDER BY id ASC");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Set headers so browser downloads as Excel
header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=exam_registrations.xls");
header("Pragma: no-cache");
header("Expires: 0");

// Print column headers
$columns = array_keys($rows[0]);
echo implode("\t", $columns) . "\n";

// Print each row
foreach ($rows as $row) {
    echo implode("\t", $row) . "\n";
}
exit;
?>