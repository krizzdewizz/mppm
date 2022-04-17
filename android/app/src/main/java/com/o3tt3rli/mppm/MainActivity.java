package com.o3tt3rli.mppm;

import android.graphics.Color;
import android.content.res.Configuration;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

  @Override
  public void onStart() {
    super.onStart();

    int nightMode = getApplicationContext().getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
    boolean isNightModeEnabled = nightMode == Configuration.UI_MODE_NIGHT_YES;

    if (isNightModeEnabled) {
      // prevent white/black flickering on startup
      bridge.getWebView().setBackgroundColor(Color.parseColor("#222428"));
    }
  }
}
