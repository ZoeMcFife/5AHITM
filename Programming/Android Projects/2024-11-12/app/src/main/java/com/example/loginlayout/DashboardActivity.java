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

import com.example.loginlayout.data.User;

public class DashboardActivity extends AppCompatActivity {

    TextView dashboardUsernameText;
    TextView dashboardEmailText;
    TextView dashboardPasswordText;
    Button logoutButton;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_dashboard);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.dashboard), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        User user;
        Bundle bundle = getIntent().getExtras();

        if (bundle != null)
        {
            user = bundle.getParcelable("user", User.class);
        }
        else
        {
            user = new User("empty", "empty", "empty");
        }

        dashboardUsernameText = findViewById(R.id.dashboardUsernameText);
        dashboardEmailText = findViewById(R.id.dashboardEmailText);
        dashboardPasswordText = findViewById(R.id.dashboardPasswordText);

        dashboardUsernameText.setText(user.getUsername());
        dashboardEmailText.setText(user.getEmail());
        dashboardPasswordText.setText(user.getPassword());

        logoutButton = findViewById(R.id.logoutButton);
        logoutButton.setOnClickListener(v -> {
            Intent intent = new Intent(DashboardActivity.this, MainActivity.class);

            startActivity(intent);
        });
    }
}