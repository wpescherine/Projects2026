package ascension.v0;

import java.awt.Color;
import java.awt.Dimension;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Start {
    JPanel start = new JPanel();
    ImageIcon mainLogo = new ImageIcon("ascension/v0/images/chain.png");
    JLabel logo = new JLabel(mainLogo);
    JButton begin = new JButton("Create");
    JButton saved = new JButton("Saved");

    Start() {
        logo.setPreferredSize(new Dimension(1000, 500));
        //x is ofor left to right qand y is for top to bottom
        logo.setBounds(0, 250, 1000, 100);
        logo.setBackground(Color.BLUE);

        begin.setPreferredSize(new Dimension(100, 50));
        begin.setBounds(395, 350, 100, 50);
        saved.setPreferredSize(new Dimension(100, 50));
        saved.setBounds(505, 350, 100, 50);

        start.add(begin);
        start.add(saved);
        start.add(logo);
        start.setLayout(null);
        start.setBackground(Color.BLACK);
        start.setPreferredSize(new Dimension(1000, 750));
    }
}