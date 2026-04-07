import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DearSpaceApp extends JFrame {

    private JPanel sideMenu;

    public DearSpaceApp() {
        setTitle("Dear Space");
        setSize(400, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(null);

        // Background earth tone
        getContentPane().setBackground(new Color(245, 240, 235));

        // ===== JUDUL =====
        JLabel title = new JLabel("Dear Space");
        title.setFont(new Font("Serif", Font.BOLD, 28));
        title.setBounds(20, 20, 200, 40);
        add(title);

        // ===== TOMBOL MENU (☰) =====
        JButton menuBtn = new JButton("☰");
        menuBtn.setBounds(330, 20, 50, 40);
        menuBtn.setFocusPainted(false);
        add(menuBtn);

        // ===== LOGO =====
        ImageIcon logo = new ImageIcon("dearspace_logo.png"); // pastikan file ada
        JLabel logoLabel = new JLabel(logo);
        logoLabel.setBounds(125, 80, 150, 150); // posisi tengah
        add(logoLabel);

        // ===== DESKRIPSI =====
        JTextArea desc = new JTextArea(
            "Dear Space adalah jasa dekorasi ruang yang menciptakan suasana nyaman, estetik, dan penuh makna."
        );
        desc.setWrapStyleWord(true);
        desc.setLineWrap(true);
        desc.setEditable(false);
        desc.setFont(new Font("SansSerif", Font.PLAIN, 12));
