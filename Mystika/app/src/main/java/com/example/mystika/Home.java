package com.example.mystika;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

public class Home extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    public void Quit(View v){
        Intent Quit = new Intent(this, MainActivity.class);
        startActivity(Quit);
    }

    public void Map(View v){
        Intent WorldMap = new Intent(this, WorldMapActivity.class);
        startActivity(WorldMap);
    }
}