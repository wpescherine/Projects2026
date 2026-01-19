package com.example.mystika;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class WorldMapActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.worldmap);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }

    public void CombatBoard(View v){
        Intent Combat = new Intent( this , CombatBoard.class);
        startActivity(Combat);
    }

    public void Quit(View v){
        Intent Quit = new Intent(this, MainActivity.class);
        startActivity(Quit);
    }

    public void Home(View v){
        Intent HomeScreen = new Intent(this, Home.class);
        startActivity(HomeScreen);
    }
}