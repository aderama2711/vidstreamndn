sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.9
nfdc face create udp://10.0.0.14
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-R4.conf