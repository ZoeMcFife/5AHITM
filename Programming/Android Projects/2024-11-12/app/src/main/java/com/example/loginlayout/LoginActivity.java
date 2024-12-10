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

public class LoginActivity extends AppCompatActivity {

    Button loginButton;
    Button registerButton;

    TextView passwordLogin;
    TextView emailLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_login);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.login), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        SavedUsers.users.add(new User("test", "test", "test"));


        loginButton = findViewById(R.id.loginButton);
        registerButton = findViewById(R.id.registerButton);

        passwordLogin = findViewById(R.id.passwordLogin);
        emailLogin = findViewById(R.id.emailLogin);


        registerButton.setOnClickListener(v -> {
            Intent intent = new Intent(this, RegistrationActivity.class);
            startActivity(intent);
        });

        loginButton.setOnClickListener(v -> {
                    Login();
                }
        );
    }

    public void Login()
    {
        String email = emailLogin.getText().toString();
        String password = passwordLogin.getText().toString();

        if (email.isEmpty() || password.isEmpty())
        {
            return;
        }

        for (User user : SavedUsers.users)
        {
            if (user.getEmail().equals(email) && user.getPassword().equals(password))
            {
                Intent intent = new Intent(this, DashboardActivity.class);
                intent.putExtra("user", user);
                startActivity(intent);
            }
        }




    }
}