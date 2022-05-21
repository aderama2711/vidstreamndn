sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.45
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client3.conf