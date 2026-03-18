<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $comments = filter_var($_POST['comments'], FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Recipient email
    $to = "info@xtremesecurityinc.com";
    // Email subject
    $email_subject = "New Form Submission: " . $subject;
    // Email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Comments:\n$comments\n";
    
    // Headers
    $headers = "From: no-reply@example.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Email successfully sent to $to...";
        header("Location: contact.html?status=success");
    } else {
        echo "Email sending failed...";
        header("Location: contact.html?status=fail");
    }
} else {
    echo "Invalid request method.";
}
?>
