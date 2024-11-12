package com.example.loginlayout;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.example.loginlayout.data.SavedUsers;
import com.example.loginlayout.data.User;

public class RegistrationActivity extends AppCompatActivity
{
    TextView registerUsername;
    TextView registerEmail;
    TextView registerPassword;
    Button registerButton;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_registration);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.registration), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        registerUsername = findViewById(R.id.registerUsername);
        registerEmail = findViewById(R.id.registerEmail);
        registerPassword = findViewById(R.id.registerPassword);
        registerButton = findViewById(R.id.buttonRegister);

        registerButton.setOnClickListener(v -> Register());


    }

    private void Register()
    {
        String username = registerUsername.getText().toString();
        String email = registerEmail.getText().toString();
        String password = registerPassword.getText().toString();

        if (username.isEmpty() || email.isEmpty() || password.isEmpty())
        {
            return;
        }

        User user = new User(username, email, password);

        Intent intent = new Intent(this, LoginActivity.class);

        SavedUsers.users.add(user);

        startActivity(intent);
    }
}