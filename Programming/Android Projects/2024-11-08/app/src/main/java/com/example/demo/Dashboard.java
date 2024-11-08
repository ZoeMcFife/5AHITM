package com.example.demo;

import android.os.Bundle;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.example.demo.data.Data;

public class Dashboard extends AppCompatActivity {

    private TextView txtOutput;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_dashboard);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        //int value = getIntent().getIntExtra("data", 0);

        String value;
        Bundle bundle = getIntent().getExtras();

        if (bundle != null)
        {
            Data data = bundle.getParcelable("data", Data.class);
            value = Integer.toString(data != null ? data.getCount() : 0);
        }
        else
        {
            value = "no data";
        }


        txtOutput = findViewById(R.id.txtOutput);

        txtOutput.setText(String.valueOf(value));

    }
}